document.addEventListener('DOMContentLoaded', () => {
    // =================================================================================
    // 1. APPLICATION MODULE
    // =================================================================================
    const App = (() => {
        // --- 1.1. STATE & CONFIGURATION ---
        const state = {
            currentCurrency: 'USD',
            quotes: {},
            chartInstance: null,
            // ... (outro estado mantido do original)
        };
        const config = {
            currencyDetails: { /* ... (mantido do original) */ },
            apiBaseUrl: 'https://economia.awesomeapi.com.br/json',
            chartOptions: { /* ... (configurações do gráfico abaixo) */ }
        };

        // --- 1.2. DOM ELEMENTS ---
        const ui = {
            // ... (elementos mantidos do original)
            currencyChart: document.getElementById('currency-chart'),
            chartSkeleton: document.getElementById('chart-skeleton'),
            fadeInElements: document.querySelectorAll('.fade-in-start'),
        };
        
        // --- 1.3. API SERVICE ---
        const api = {
            async fetchLatestQuotes() { /* ... (mantido do original) */ },
            async fetchDailyHistory(currency, days = 7) {
                try {
                    const response = await fetch(`${config.apiBaseUrl}/daily/${currency}-BRL/${days}`);
                    if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
                    return await response.json();
                } catch (error) {
                    console.error("API History Fetch Error:", error);
                    return null;
                }
            }
        };

        // --- 1.4. RENDERER (UI CONTROLLER) ---
        const render = {
            // ... (funções de renderização mantidas do original, como formatCurrency, quoteDisplay, etc.)
            
            updateChart(historyData) {
                if (!historyData || !Array.isArray(historyData)) return;

                const labels = historyData.map(d => dayjs.unix(d.timestamp).format('DD/MM')).reverse();
                const data = historyData.map(d => parseFloat(d.bid)).reverse();

                ui.chartSkeleton.style.display = 'none';
                
                if (state.chartInstance) {
                    state.chartInstance.data.labels = labels;
                    state.chartInstance.data.datasets[0].data = data;
                    state.chartInstance.update();
                } else {
                    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
                    state.chartInstance = new Chart(ui.currencyChart, {
                        type: 'line',
                        data: {
                            labels,
                            datasets: [{
                                label: 'Valor (BRL)',
                                data,
                                borderColor: accentColor,
                                backgroundColor: accentColor + '33', // com transparência
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                            }]
                        },
                        options: { /* ... (opções do gráfico abaixo) */ }
                    });
                }
            },
            
            triggerAnimations() {
                ui.fadeInElements.forEach((el, index) => {
                    setTimeout(() => el.classList.add('fade-in-animate'), index * 100);
                });
            }
        };

        // --- 1.5. EVENT HANDLERS & LOGIC ---
        const handlers = {
            async fetchAndRenderAll(isInitialLoad = false) {
                render.hideError();
                const quotesData = await api.fetchLatestQuotes();
                // ... (lógica de quotes mantida do original)
                
                await this.fetchAndRenderHistory(); // Chama a função do gráfico
                
                if (isInitialLoad) {
                    render.loadingState(false);
                    render.triggerAnimations(); // Dispara as animações de entrada
                }
            },

            async fetchAndRenderHistory() {
                ui.chartSkeleton.style.display = 'flex';
                const historyData = await api.fetchDailyHistory(state.currentCurrency);
                if (historyData) render.updateChart(historyData);
            },
            
            changeCurrency(newCurrency) {
                if (state.currentCurrency === newCurrency || state.isLoading) return;
                state.currentCurrency = newCurrency;
                this.renderCurrentCurrencyData();
                this.fetchAndRenderHistory(); // Atualiza o gráfico ao trocar de moeda
                // ... (lógica de conversão mantida do original)
            },
            // ... (outros handlers mantidos do original)
        };

        // --- 1.6. INITIALIZATION ---
        const init = () => {
            render.initialTheme();
            // ... (event listeners mantidos do original)
            handlers.fetchAndRenderAll(true);
            setInterval(() => handlers.fetchAndRenderAll(false), state.updateInterval);
        };

        return { init };
    })();

    // Inicia a aplicação
    App.init();
});
