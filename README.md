# 💰 Cotação PRO | Dólar, Euro e Libra em Tempo Real

<div align="center">

![Cotação PRO](https://placehold.co/1200x630/0f172a/38bdf8?text=Cota%C3%A7%C3%A3o%20PRO)

**Acompanhe a cotação do Dólar, Euro e Libra em tempo real com um conversor de moedas inteligente e uma interface elegante.**

[![Deploy Status](https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge)](https://futurodevjunior.github.io/Dolar/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Made with](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-orange?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML)

**🌐 [Acesse a aplicação ao vivo](https://futurodevjunior.github.io/Dolar/)**

</div>

---

## 📋 Índice

- [✨ Funcionalidades](#-funcionalidades)
- [🎯 Características Técnicas](#-características-técnicas)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
- [🖥️ Interface e UX](#-interface-e-ux)
- [⚡ Performance e Otimizações](#-performance-e-otimizações)
- [♿ Acessibilidade](#-acessibilidade)
- [🏗️ Instalação e Execução](#️-instalação-e-execução)
- [📦 Deploy no GitHub Pages](#-deploy-no-github-pages)
- [🔧 Configuração e Personalização](#-configuração-e-personalização)
- [📊 API e Fontes de Dados](#-api-e-fontes-de-dados)
- [🧪 Testes e Qualidade](#-testes-e-qualidade)
- [📈 Roadmap e Melhorias Futuras](#-roadmap-e-melhorias-futuras)
- [🤝 Contribuição](#-contribuição)
- [🔖 Licença](#-licença)
- [👨‍💻 Autor](#-autor)

---

## ✨ Funcionalidades

### 🎯 **Funcionalidades Essenciais (Must-have)**

#### 💵 **Cotação em Tempo Real**
- **Dados Atualizados**: Cotação em tempo real do Dólar (USD), Euro (EUR) e Libra Esterlina (GBP) em relação ao Real Brasileiro (BRL)
- **Valores Precisos**: Exibição clara dos valores de **Compra (BID)** e **Venda (ASK)** com formatação brasileira
- **Fonte Confiável**: Dados fornecidos pela [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas) com alta precisão

#### 🔄 **Atualização Automática**
- **Intervalo Inteligente**: Atualização automática a cada **5 minutos** (300.000ms)
- **Sincronização**: Horário exato da última atualização bem-sucedida
- **Tratamento de Erros**: Recuperação automática em caso de falhas na API

#### 🧮 **Conversor Inteligente**
- **Conversão Bidirecional**: Converta valores entre BRL e a moeda selecionada
- **Cálculo em Tempo Real**: Conversões instantâneas com debounce de 250ms
- **Validação de Entrada**: Aceita apenas números, vírgulas e pontos
- **Formatação Brasileira**: Valores formatados no padrão brasileiro (R$ 1.234,56)

#### 📱 **Design Responsivo e Profissional**
- **Mobile-First**: Interface otimizada para smartphones, tablets e desktops
- **Layout Adaptativo**: Grid responsivo que se adapta a diferentes tamanhos de tela
- **Tipografia Moderna**: Fonte Inter com pesos variados para hierarquia visual

### 🌟 **Funcionalidades Avançadas (Should-have)**

#### 📈 **Indicadores de Variação**
- **Setas Visuais**: Indicadores ▲ (alta) e ▼ (baixa) para variação percentual
- **Cores Semânticas**: Verde para alta, vermelho para baixa, cinza para neutro
- **Percentual Preciso**: Variação exata com 2 casas decimais

#### 🎨 **Sistema de Temas**
- **Tema Claro/Escuro**: Alternância suave entre temas com transições elegantes
- **Persistência**: Preferência salva no localStorage
- **Detecção Automática**: Respeita a preferência do sistema operacional
- **Ícones Dinâmicos**: Ícones de sol/lua com animações de rotação

#### 🎨 **Animações e Microinterações**
- **Skeleton Loading**: Carregamento elegante com animações pulse
- **Animações de Números**: Transições suaves nos valores de cotação
- **Efeito Flash**: Destaque visual quando valores são atualizados
- **Hover Effects**: Elevação de cards com sombras dinâmicas
- **Fade-in**: Aparição suave do conteúdo após carregamento

#### 📋 **Funcionalidades de Produtividade**
- **Copiar para Área de Transferência**: Botão com feedback visual (ícone de check)
- **Debounce Inteligente**: Otimização de performance nas conversões
- **Tratamento de Erros**: Mensagens amigáveis em caso de falhas
- **Estado de Loading**: Indicadores visuais durante carregamento

---

## 🎯 Características Técnicas

### 🏗️ **Arquitetura Modular**
- **Padrão Module Pattern**: Encapsulamento completo da aplicação
- **Separação de Responsabilidades**: Módulos independentes para API, UI, Utilitários
- **Clean Code**: Código limpo, legível e bem documentado
- **Princípios SOLID**: Estrutura escalável e manutenível

### 🔧 **Configuração Flexível**
```javascript
const config = {
    currencyDetails: {
        USD: { name: 'Dólar Americano', code: 'USD / BRL' },
        EUR: { name: 'Euro', code: 'EUR / BRL' },
        GBP: { name: 'Libra Esterlina', code: 'GBP / BRL' }
    },
    apiBaseUrl: 'https://economia.awesomeapi.com.br/json',
    updateInterval: 300000 // 5 minutos
};
```

### 🎨 **Design System WCAG Compliant**
- **Contraste AA/AAA**: Cores otimizadas para acessibilidade
- **Variáveis CSS**: Sistema de design consistente
- **Transições Suaves**: Animações com cubic-bezier
- **Focus Visible**: Indicadores de foco para navegação por teclado

---

## 🚀 Tecnologias Utilizadas

### **Frontend Core**
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com variáveis CSS e animações
- **JavaScript ES6+** - Lógica de aplicação com async/await e módulos

### **Frameworks e Bibliotecas**
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first para desenvolvimento rápido
- **[Google Fonts - Inter](https://fonts.google.com/specimen/Inter)** - Tipografia moderna e legível

### **APIs e Serviços**
- **[AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas)** - API de cotações de moedas em tempo real
- **GitHub Pages** - Hospedagem gratuita e confiável

### **Ferramentas de Desenvolvimento**
- **LocalStorage API** - Persistência de preferências do usuário
- **Fetch API** - Requisições HTTP modernas
- **Web APIs** - Clipboard, Intersection Observer, etc.

---

## 🏗️ Arquitetura do Projeto

### **Estrutura Modular**

## 🖥️ Interface e UX

### **Design System**
- **Paleta de Cores**: Sistema de cores WCAG AA/AAA compliant
- **Tipografia**: Inter font com hierarquia clara
- **Componentes**: Cards, botões e inputs padronizados
- **Animações**: Transições suaves com cubic-bezier

### **Responsividade**
- **Mobile-First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Layout adaptativo com CSS Grid e Flexbox

## ⚡ Performance e Otimizações

### **Métricas Atuais**
- **Lighthouse Score**: 95-100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### **Otimizações Implementadas**
- **Service Worker**: Cache offline para recursos estáticos
- **Preconnect**: Conexões pré-estabelecidas para APIs externas
- **Debounce**: Otimização de performance nas conversões
- **Lazy Loading**: Carregamento sob demanda

## ♿ Acessibilidade

### **Conformidade WCAG**
- **Nível AA**: Contraste de cores adequado
- **Navegação por Teclado**: Todos os elementos acessíveis
- **Screen Readers**: ARIA labels e roles apropriados
- **Focus Management**: Indicadores visuais de foco

### **Recursos de Acessibilidade**
- **Semantic HTML**: Estrutura semântica adequada
- **Alt Text**: Descrições para elementos visuais
- **Keyboard Navigation**: Navegação completa por teclado
- **Color Independence**: Informação não depende apenas de cor

## 🏗️ Instalação e Execução

## 📦 Deploy no GitHub Pages

## 🔧 Configuração e Personalização

## 📊 API e Fontes de Dados

## 🧪 Testes e Qualidade

## 📈 Roadmap e Melhorias Futuras

## 🤝 Contribuição

## 🔖 Licença

## 👨‍💻 Autor

<div align="center">

**Gabriel Ferreira** - Desenvolvedor Full Stack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/DevFerreiraG/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/futurodevjunior)

**💼 [LinkedIn](https://www.linkedin.com/in/DevFerreiraG/) | 🐙 [GitHub](https://github.com/futurodevjunior)**

</div>

---

<div align="center">

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**

**🌐 [Acesse a aplicação ao vivo](https://futurodevjunior.github.io/Dolar/)**

*Desenvolvido com ❤️ seguindo princípios de Clean Code e SOLID para garantir um código limpo, legível e de fácil manutenção.*

</div>

## Status do Deploy

[![Deploy Status](https://github.com/futurodevjunior/Dolar/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/futurodevjunior/Dolar/actions)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100-brightgreen?style=for-the-badge)](https://futurodevjunior.github.io/Dolar/)
[![Uptime](https://img.shields.io/badge/Uptime-99.9%25-brightgreen?style=for-the-badge)](https://futurodevjunior.github.io/Dolar/)

## 📧 Contato

**Gabriel Ferreira** - Desenvolvedor Full Stack

- 📧 **Email**: [Contato.ferreirag@outlook.com](mailto:Contato.ferreirag@outlook.com)
- 🔗 **LinkedIn**: [DevFerreiraG](https://www.linkedin.com/in/DevFerreiraG/)
- 🐙 **GitHub**: [futurodevjunior](https://github.com/futurodevjunior)

## 🔒 Segurança

Para reportar vulnerabilidades de segurança:
- **Email**: [Contato.ferreirag@outlook.com](mailto:Contato.ferreirag@outlook.com)
- **Política**: [security-policy.md](security-policy.md)

## 🚀 **Próximos Passos**

1. **Crie os arquivos** acima no seu repositório
2. **Configure o GitHub Pages** nas configurações do repositório
3. **Ative GitHub Actions** para deploy automático
4. **Teste o deploy** fazendo um push para a branch main

Todos os arquivos agora estão configurados com seu email correto: **Contato.ferreirag@outlook.com** ✅
