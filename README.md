# 🌍 Explorador de Mundos - Países com GraphQL

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![GraphQL](https://img.shields.io/badge/GraphQL-Apollo-e535ab?logo=graphql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-Bundler-646cff?logo=vite)

<br />
<div align="center">
  <img src="./public/video_de_apresentacao.gif" alt="Demonstração do Explorador de Mundos" width="100%">
</div>
<br />

## 📖 Sobre o Projeto

**Países com GraphQL** é uma aplicação web interativa que permite aos usuários explorar informações detalhadas sobre países de todo o mundo. A diferença fundamental deste projeto para aplicações REST tradicionais é o uso de **GraphQL**, que permite consultar dados de forma extremamente eficiente, solicitando apenas as informações necessárias para a interface.

A aplicação implementa um sistema de filtragem robusto, design responsivo e tratamento de estados assíncronos para oferecer uma experiência de usuário fluida.

> ⚠️ **Nota:** Os dados informativos (nomes dos países, capitais, regiões, etc.) são exibidos em **inglês**, mantendo a fidelidade ao formato original fornecido pela API externa utilizada.

### ✨ Funcionalidades Principais

- **Consultas GraphQL Eficientes:** Uso de `Apollo Client` para busca de dados e gestão de cache, evitando "over-fetching".
- **Filtragem Dinâmica:** Filtros combináveis por Continente, Moeda e Inicial do nome.
- **Design Modular:** Arquitetura de componentes atômicos (`Cards`, `Badges`) para facilitar a escalabilidade e manutenção.
- **Feedback de UI:** Estados personalizados de Carregamento (Loading Spinners) e Tratamento de Erros visuais amigáveis.
- **Responsive Design:** Layout em Grid adaptativo construído com a nova versão do **Tailwind CSS v4**.

### 🎨 Decisões de UI/UX

- **Renderização de Bandeiras:**
  A aplicação utiliza a **FlagCDN** para exibir as bandeiras dos países.
  > _Motivo:_ A API original fornece emojis (ex: 🇧🇷). No entanto, o **Windows** não suporta nativamente a renderização de emojis de bandeiras, exibindo apenas as siglas (ex: "BR"). A implementação de imagens via CDN garante uma experiência visual consistente e rica para usuários de todos os sistemas operacionais (Windows, Linux, macOS).

## 🚀 Tecnologias Utilizadas

- **Core:** React 19.
- **Data Fetching:** Apollo Client & GraphQL.
- **Estilização:** Tailwind CSS v4 (Design moderno, Glassmorphism, animações).
- **Build Tool:** Vite.
- **API:** [Countries GraphQL API](https://studio.apollographql.com/public/countries/variant/current/home) (Trevor Blades).

## 📂 Estrutura do Projeto

O código foi organizado seguindo princípios de "Clean Code", separando a lógica de apresentação dos componentes visuais:

```bash
src/
├── components/
│   ├── BarraFiltros/      # Lógica de inputs e selects de filtro
│   ├── Card/              # Componentes atômicos do cartão do país
│   │   ├── NameFlag/     # Renderização de bandeira e nome
│   │   ├── Capital/       # Dados da capital
│   │   ├── Currency/      # Tratamento de moedas
│   │   └── ...
│   ├── EmptyState/        # Feedback visual quando não há resultados
│   └── NumberCountries/   # Contador dinâmico de resultados
├── DisplayCountries.jsx   # Componente container (Lógica Apollo & Query)
└── ...
```

## 🛠️ Instalação e Uso

1. **Clonar o repositório:**

```bash
git clone https://github.com/rafaeltenorioo/paises-com-graphql.git
cd paises-com-graphql
```

2. **Instalar dependências:**

```bash
npm install
# ou
yarn install
```

3. **Rodar o projeto:**

```bash
npm run dev
```

## 💡 Aprendizados Chave

Este projeto foi fundamental para aprofundar conhecimentos em:

Diferenças práticas entre REST e GraphQL: Entendimento prático sobre otimização de requisições e over-fetching.

Apollo Client: Gerenciamento de variáveis reativas e cache dentro de queries.

Tailwind CSS v4: Configuração e uso da versão mais recente em ambiente Vite
