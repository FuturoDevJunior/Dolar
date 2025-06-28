# Cotação PRO

> Transparência, precisão e experiência de excelência para quem precisa de cotações e conversão de moedas em tempo real.

![Cotação PRO](https://placehold.co/1200x630/0f172a/38bdf8?text=Cota%C3%A7%C3%A3o%20PRO)

[![GitHub Actions](https://github.com/futurodevjunior/Dolar/actions/workflows/deploy.yml/badge.svg)](https://github.com/futurodevjunior/Dolar/actions)
[![License: MIT](https://img.shields.io/github/license/futurodevjunior/Dolar?style=for-the-badge)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/futurodevjunior/Dolar?style=for-the-badge)](https://github.com/futurodevjunior/Dolar/commits/main)
[![Open Issues](https://img.shields.io/github/issues/futurodevjunior/Dolar?style=for-the-badge)](https://github.com/futurodevjunior/Dolar/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/futurodevjunior/Dolar?style=for-the-badge)](https://github.com/futurodevjunior/Dolar/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/futurodevjunior/Dolar?style=for-the-badge)](https://github.com/futurodevjunior/Dolar/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/futurodevjunior/Dolar?style=for-the-badge)](https://github.com/futurodevjunior/Dolar/network/members)
[![Releases](https://img.shields.io/github/v/release/futurodevjunior/Dolar?style=for-the-badge&include_prereleases)](https://github.com/futurodevjunior/Dolar/releases)

---

## Visão e Propósito

O **Cotação PRO** nasceu da necessidade real de acesso rápido, confiável e acessível às principais moedas estrangeiras frente ao Real. O projeto entrega uma experiência moderna, sem ruído, com foco em clareza, performance e acessibilidade. Cada detalhe foi pensado para facilitar a vida de quem precisa de informação precisa, seja para negócios, viagens, estudos ou curiosidade.

---

## Open Source de Verdade

Este projeto é 100% open source, sob licença MIT. Todo o código está disponível, documentado e pronto para ser estudado, reutilizado ou aprimorado. A governança é transparente, e toda contribuição é bem-vinda. O desenvolvimento é guiado por princípios de ética, colaboração e excelência técnica.

---

## Diferenciais

- **Atualização em tempo real** (fonte: [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas))
- **Conversor bidirecional**: BRL <-> USD, EUR, GBP
- **Interface responsiva e acessível**: dark/light mode, navegação por teclado, contraste otimizado
- **PWA**: funciona offline, pode ser instalado no celular ou desktop
- **Indicadores visuais de variação**: alta/baixa com cores e ícones
- **Mensagens de erro claras**: feedback imediato e amigável
- **Segurança e privacidade**: sem rastreio, política de segurança pública
- **CI/CD e testes**: deploy automatizado, validação de acessibilidade e performance
- **Código aberto, limpo e documentado**

---

## Funcionalidades

- Consulta instantânea das cotações de Dólar, Euro e Libra
- Conversão rápida e precisa entre Real e moeda estrangeira
- Atualização automática a cada 5 minutos
- Copiar valor convertido com um clique
- Indicadores de variação percentual (alta/baixa)
- Totalmente adaptado para qualquer dispositivo

---

## Arquitetura e Tecnologias

- **HTML5** e **CSS3** (Tailwind via CDN)
- **JavaScript** moderno (ES6+), arquitetura modular
- **PWA**: Manifest, Service Worker, cache offline
- **Acessibilidade**: navegação por teclado, labels semânticos, contraste
- **SEO**: Meta tags, sitemap, robots.txt
- **CI/CD**: GitHub Actions, testes de acessibilidade e performance
- **Segurança**: security.txt, política de vulnerabilidade, headers

```
Dolar/
├── index.html         # Aplicação principal
├── manifest.json      # PWA
├── sw.js              # Service Worker
├── robots.txt         # SEO
├── sitemap.xml        # SEO
├── security.txt       # Segurança
├── security-policy.md # Política de segurança
├── _config.yml        # GitHub Pages/Jekyll
└── .github/workflows/deploy.yml # CI/CD
```

---

## Como usar

Acesse diretamente pelo navegador: [https://futurodevjunior.github.io/Dolar/](https://futurodevjunior.github.io/Dolar/)

Ou rode localmente:

```bash
git clone https://github.com/futurodevjunior/Dolar.git
cd Dolar
# Abra o arquivo index.html no navegador
```

---

## Mini FAQ

**O Cotação PRO é gratuito?**
> Sim, 100% gratuito e open source. Não há anúncios, paywall ou coleta de dados pessoais.

**De onde vêm as cotações?**
> As cotações são obtidas em tempo real da [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas), uma fonte pública e confiável.

**Funciona offline?**
> Sim. Após o primeiro acesso, o site pode ser usado offline graças ao suporte PWA e Service Worker. Os dados exibidos offline são os da última atualização.

**Como posso contribuir?**
> Basta abrir uma issue ou pull request no GitHub. Toda sugestão, correção ou melhoria é bem-vinda e analisada com atenção.

**Como reportar um problema de segurança?**
> Siga a [política de segurança](security-policy.md) do projeto. Não publique vulnerabilidades publicamente; use os canais indicados.

**O projeto coleta ou armazena meus dados?**
> Não. O Cotação PRO não coleta, armazena ou compartilha dados pessoais dos usuários.

**Posso usar o código em outros projetos?**
> Sim, a licença MIT permite uso, modificação e distribuição livre, desde que mantidos os créditos.

---

## Contribua e evolua

O Cotação PRO é um projeto aberto à comunidade. Se você encontrou um problema, tem uma sugestão ou quer contribuir com código, abra uma issue ou pull request. Todas as contribuições são analisadas com respeito e atenção. O objetivo é evoluir sempre, mantendo a qualidade, a transparência e a confiança da comunidade.

---

## Segurança e transparência

Levamos segurança a sério. Vulnerabilidades podem ser reportadas conforme a [política de segurança](security-policy.md). Não coletamos dados pessoais e seguimos as melhores práticas de privacidade e proteção. A governança do projeto é aberta e auditável.

---

## Governança, Contato e Comunidade

O projeto é mantido por [Gabriel Ferreira](https://github.com/futurodevjunior) e pela comunidade. Para contato, utilize as [issues](https://github.com/futurodevjunior/Dolar/issues), [pull requests](https://github.com/futurodevjunior/Dolar/pulls) ou conecte-se pelo [LinkedIn](https://www.linkedin.com/in/DevFerreiraG/).

Seja parte da evolução: contribua, sugira, questione. Aqui, toda participação é valorizada.

---

## Licença

Distribuído sob a licença MIT.

---

**Cotação PRO é mais do que um conversor: é um compromisso com a excelência, a transparência e a comunidade. Se este projeto te ajudou, compartilhe, contribua e faça parte dessa evolução.**
