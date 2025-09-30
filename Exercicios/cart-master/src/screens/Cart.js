import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { numberFormat } from "../services/numberFormat";

export function Cart({
  cartItems,
  increaseQuantity,
  decreanseQuantity,
  removeFromCart,
  getTotalPrice,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{numberFormat(item.price)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => decreanseQuantity(item.id)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => increaseQuantity(item.id)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Seu carrinho está vazio.</Text>
        }
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>
          Total: {numberFormat(getTotalPrice())}
        </Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  name: {
    fontSize: 16,
    flex: 2,
  },
  price: {
    fontSize: 16,
    flex: 1,
    textAlign: "right",
  },
  quantity: {
    fontSize: 16,
    flex: 1,
    textAlign: "right",
  },
  empty: {
    textAlign: "center",
    marginTop: 32,
    color: "#888",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#eee",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  totalContainer: {
    marginTop: 24,
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 8,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  checkoutButton: {
    marginTop: 16,
    backgroundColor: "orange",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
