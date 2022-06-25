import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "native-base";

const Footer = ({ total, clearcart, navigation }) => {
  return (
    <View style={styles.totals}>
      <Button onPress={clearcart} style={{ borderRadius: 10 }}>
        <Text style={{ color: "white" }}>Clear cart</Text>
      </Button>

      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "400" }}>Subtotals :</Text>
          <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "400" }}>
            {total}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Text>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totals: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  checkoutButton: {
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "blue",
    alignItems: "center",
    padding: 10,
  },
});

export default Footer;
