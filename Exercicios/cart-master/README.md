# Aplicativo de E-commerce Mobile

### Objetivo do projeto: implementar o carrinho de compras com adicionar, subtrair, remover itens, mostrar total e botão de finalizar compras

## Visão Geral

Este projeto é um **aplicativo de e-commerce para dispositivos móveis** feito com **React Native** e **Expo**.  
Ele utiliza o **Firebase Firestore** como backend para armazenar os produtos.  
O app permite visualizar uma lista de produtos, ver detalhes de cada produto e gerenciar um carrinho de compras completo.

---

## Estrutura de Pastas

- **App.js**: Componente principal, gerencia navegação e estado do carrinho.
- **index.js**: Ponto de entrada, registra o App.
- **src/components/**: Componentes reutilizáveis (Produto, Ícone do Carrinho).
- **src/screens/**: Telas principais (Lista de Produtos, Detalhes, Carrinho).
- **src/services/**: Serviços utilitários (conexão com Firebase, formatação de números, busca de produtos).
- **assets/**: Imagens usadas no app.
- **src/examples/**: Exemplos de uso de `aspectRatio` em layouts.

---

## Fluxo Principal

### Lista de Produtos

- Tela inicial (**ProductsList**) mostra os produtos vindos do Firebase usando `getProducts`.
- Cada produto é exibido com o componente **Product**.

### Detalhes do Produto

- Ao clicar em um produto, navega para **ProductDetails**, que mostra informações detalhadas e permite adicionar ao carrinho.

### Carrinho

- O ícone do carrinho (**CartIcon**) mostra a quantidade de itens.
- A tela de carrinho (**Cart**) agora está **totalmente implementada**:
  - Exibe todos os itens adicionados ao carrinho.
  - Permite **aumentar** ou **diminuir** a quantidade de cada item.
  - Permite **remover** itens do carrinho.
  - Mostra o **valor total** do carrinho.
  - Exibe um botão "Finalizar Compras" (sem funcionalidade).

---

## Firebase

- Configuração em **firebase.js**.
- O app busca produtos da coleção `"products"` no Firestore.

---

## Estado do Carrinho

O estado do carrinho é mantido no componente principal (**App**) usando `useState`.

Funções importantes:

- `addItemToCart`: Adiciona produto ao carrinho.
- `increaseQuantity`: Aumenta a quantidade de um item.
- `decreaseQuantity`: Diminui a quantidade de um item.
- `removeItem`: Remove um item do carrinho.
- `getItemsCount`: Retorna quantidade total de itens.
- `getTotalPrice`: Soma o valor total dos itens.

---

## Componentes

- **Product**: Exibe produto com imagem, nome e preço.
- **ProductAdvanced**: Versão avançada, suporta `aspectRatio` dinâmico e tratamento de erro de imagem.
- **CartIcon**: Ícone do carrinho com contador.
- **Cart**: Tela do carrinho, agora com todas as funcionalidades implementadas.

---

## Serviços

- **productsService**: Busca produtos e detalhes do produto no Firebase, com cache local.
- **numberFormat**: Formata valores monetários para o padrão brasileiro (R$).

---

## Exemplos de Layout

- O arquivo **AspectRatioExamples** mostra exemplos de uso de `aspectRatio` para diferentes tipos de produtos/layouts.

---

## Navegação

- Utiliza **@react-navigation/native** e **@react-navigation/native-stack** para navegação entre telas.

---

## Resumo das Implementações do Carrinho

- Exibição dos itens do carrinho.
- Alteração da quantidade de cada item (+/-).
- Remoção de itens do carrinho.
- Exibição do valor total do carrinho.
- Botão "Finalizar Compras" na tela do carrinho.

---

## Observações

- O botão "Finalizar Compras" é apenas visual, sem funcionalidade de checkout.
- O carrinho é gerenciado inteiramente no estado do App.

---
