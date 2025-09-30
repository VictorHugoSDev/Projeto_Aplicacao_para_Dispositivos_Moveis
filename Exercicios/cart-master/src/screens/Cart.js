import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { numberFormat } from "../services/numberFormat";

export function Cart({ cartItems }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{numberFormat(item.price)}</Text>
            <Text style={styles.quantity}>Qtd: {item.quantity}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Seu carrinho está vazio.</Text>
        }
      />
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
});
