import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { numberFormat } from "../services/numberFormat";

export function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  getTotalPrice,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={item.product.image}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.product.name}</Text>
              <Text style={styles.price}>
                {numberFormat(item.product.price * item.qty)}
              </Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => decreaseQuantity(item.id)}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.qty}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => increaseQuantity(item.id)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeItem(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remover</Text>
                </TouchableOpacity>
              </View>
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
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 8,
  },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
  infoContainer: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#eee",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonText: { fontSize: 18, fontWeight: "bold" },
  removeButton: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  removeButtonText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  quantity: { fontSize: 16, fontWeight: "bold" },
  empty: { textAlign: "center", marginTop: 32, color: "#888" },
  totalContainer: {
    marginTop: 24,
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 8,
    alignItems: "flex-end",
  },
  totalText: { fontSize: 18, fontWeight: "bold", color: "#333" },
  checkoutButton: {
    marginTop: 16,
    backgroundColor: "orange",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
