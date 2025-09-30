# Aplicativo de E-commerce Mobile
### Objetivo do projeto: realizar a implementação do adicionar/subtrair as quantidade de itens do carrinho

## Visão Geral
Este projeto é um **aplicativo de e-commerce para dispositivos móveis** feito com **React Native** e **Expo**.  
Ele utiliza o **Firebase Firestore** como backend para armazenar os produtos.  
O app permite visualizar uma lista de produtos, ver detalhes de cada produto e adicionar produtos ao carrinho.

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
- A tela de carrinho (**Cart**) está pronta para ser implementada.

---

## Firebase
- Configuração em **firebase.js**.  
- O app busca produtos da coleção `"products"` no Firestore.

---

## Estado do Carrinho
O estado do carrinho é mantido no componente principal (**App**) usando `useState`.

Funções importantes:
- `addItemToCart`: Adiciona produto ao carrinho.  
- `getItemsCount`: Retorna quantidade total de itens.  
- `getTotalPrice`: Soma o valor total dos itens.

---

## Componentes
- **Product**: Exibe produto com imagem, nome e preço.  
- **ProductAdvanced**: Versão avançada, suporta `aspectRatio` dinâmico e tratamento de erro de imagem.  
- **CartIcon**: Ícone do carrinho com contador.

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

## Resumo
- App de **e-commerce mobile** com React Native + Expo.  
- Produtos carregados do Firebase.  
- Carrinho de compras com contador.  
- Layouts responsivos usando `aspectRatio`.  
- Componentização e organização clara.
