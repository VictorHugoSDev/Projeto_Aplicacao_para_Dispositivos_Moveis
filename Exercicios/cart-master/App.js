import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./src/screens/ProductList";
import { ProductDetails } from "./src/screens/ProductDetails";
import { Cart } from "./src/screens/Cart";
import { CartIcon } from "./src/components/CartIcon";
import { useState } from "react";
import { getProduct } from "./src/services/productsService";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [itensCarrinho, setItensCarrinho] = useState([]);

  // Adiciona produto ao carrinho (agora async)
  const addItemToCart = async (id) => {
    try {
      const product = await getProduct(id);
      setItensCarrinho((prevItems) => {
        const item = prevItems.find((i) => i.id === id);
        if (!item) {
          return [...prevItems, { id, qty: 1, product }];
        } else {
          return prevItems.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          );
        }
      });
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
    }
  };

  const increaseQuantity = (id) => {
    setItensCarrinho((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItensCarrinho((prevItems) =>
      prevItems
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setItensCarrinho((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getItemsCount = () => {
    return itensCarrinho.reduce((sum, item) => sum + item.qty, 0);
  };

  const getTotalPrice = () => {
    return itensCarrinho.reduce(
      (sum, item) => sum + item.product.price * item.qty,
      0
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsList}
          options={({ navigation }) => ({
            title: "Produtos",
            headerTitleStyle: styles.headerTitle,
            headerRight: () => (
              <CartIcon navigation={navigation} getItemsCount={getItemsCount} />
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          options={({ navigation }) => ({
            title: "Detalhes do produto",
            headerTitleStyle: styles.headerTitle,
            headerRight: () => (
              <CartIcon navigation={navigation} getItemsCount={getItemsCount} />
            ),
          })}
        >
          {(props) => (
            <ProductDetails {...props} addItemToCart={addItemToCart} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Cart"
          options={({ navigation }) => ({
            title: "Meu carrinho",
            headerTitleStyle: styles.headerTitle,
            headerRight: () => (
              <CartIcon navigation={navigation} getItemsCount={getItemsCount} />
            ),
          })}
        >
          {(props) => (
            <Cart
              {...props}
              cartItems={itensCarrinho}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
              getTotalPrice={getTotalPrice}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
