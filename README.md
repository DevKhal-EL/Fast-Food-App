# 🍔 Fast Food Delivery App — React Native Study

Este projeto é uma aplicação mobile de entrega de comida desenvolvida com o objetivo de colocar em prática conceitos avançados de **React Native** e **arquitetura de software escalável**.

O desenvolvimento foi guiado pelo tutorial profissional da **JavaScript Mastery**.

---

## 🎯 Objetivos do Projeto

Este repositório foi criado para:

* **Domínio de Base (Etec):** aprender os fundamentos de criação de páginas e navegação em React Native, garantindo uma base sólida para os estudos na Etec.
* **Conhecimento Prévio:** obter uma base prática robusta antes de me aprofundar em cursos avançados de desenvolvimento mobile.
* **Experiência com Projetos Reais:** entender como aplicativos profissionais lidam com estados globais, autenticação, bancos de dados complexos e monitoramento de erros em produção.
* **Prática Mobile:** exercitar lógica de programação voltada para dispositivos móveis e estilização moderna.

---

## 🚀 Tecnologias Utilizadas

O projeto utiliza uma stack moderna para desenvolvimento profissional com React Native:

* **Expo:** ecossistema de ferramentas que facilita o desenvolvimento e o deploy de aplicações nativas.
* **NativeWind:** implementação do Tailwind CSS para React Native, permitindo estilização rápida e adaptável, incluindo suporte a Light/Dark Mode.
* **Zustand:** gerenciamento de estado global leve e performático, evitando o boilerplate tradicional do Redux.
* **Appwrite:** Backend-as-a-Service utilizado para autenticação de usuários, banco de dados e armazenamento de imagens.
* **Sentry:** monitoramento de erros e rastreamento de crashes em tempo real.
* **Expo Router:** sistema de navegação baseado em arquivos, utilizando grupos de rotas como `(auth)` e `(tabs)`.

---

## ✨ Funcionalidades

### ✨ Funcionalidades Implementadas

* [x] **Arquitetura de Pastas Escalável:** Organização profissional utilizando grupos de rotas (*folder-based routing*) com o Expo Router.
* [x] **Sistema de Navegação Nativa:** Implementação de navegação por abas (*Tabs*) flutuante e pilhas (*Stack*) para uma experiência fluida.
* [x] **Interface de Autenticação (UI):** Criação das telas de Login e Cadastro com layouts compartilhados e componentes reutilizáveis.
* [x] **Design com NativeWind:** Estilização moderna e responsiva utilizando Tailwind CSS diretamente no React Native.
* [x] **Configuração de Fontes e Assets:** Integração de fontes personalizadas (Quicksand) e gerenciamento de ícones do projeto.

---

## 🚧 Próximos Passos

**Em desenvolvimento**

* [ ] **Integração com Appwrite:** Conexão com o backend para autenticação real de usuários e banco de dados NoSQL.
* [ ] **Gerenciamento de Estado Global (Zustand):** Implementação da lógica para manter os dados sincronizados em todo o app, como o contador do carrinho.
* [ ] **Busca e Filtros Dinâmicos:** Sistema de pesquisa de produtos com filtragem por categorias vindas do banco de dados.
* [ ] **Lógica Completa do Carrinho:** Funcionalidade para adicionar, remover e gerenciar quantidades de itens.
* [ ] **Monitoramento com Sentry:** Rastreamento de erros e crashes em tempo real para produção.

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter:

* [Node.js](https://nodejs.org/) instalado
* Aplicativo **Expo Go** instalado no seu celular (Android ou iOS)

### Passo a Passo

#### 1. Clone o repositório

```bash
git clone https://github.com/DevKhal-EL/Fast-Food-App.git
```

#### 2. Entre na pasta do projeto

```bash
cd fast-food-delivery
```

#### 3. Instale as dependências

```bash
npm install
```

#### 4. Inicie o Metro Bundler

```bash
npx expo start
```

#### 5. Abra o aplicativo no celular

Escaneie o **QR Code** exibido no terminal usando:

* A câmera do celular no **iOS**
* O aplicativo **Expo Go** no **Android**

---

## 📚 Objetivo de Aprendizado

Mais do que apenas desenvolver um aplicativo funcional, este projeto serve como um ambiente de estudo para compreender como diferentes tecnologias e conceitos se integram em uma aplicação mobile moderna.

A ideia é utilizar o projeto para desenvolver uma visão mais prática sobre **arquitetura, gerenciamento de estado, autenticação, persistência de dados, navegação e monitoramento de aplicações em produção**.
