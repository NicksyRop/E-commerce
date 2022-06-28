import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { Button, ScrollView } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import { useSelector, useDispatch } from "react-redux";

import { Divider } from "native-base";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  clearCart,
  decremanetCart,
  getTotals,
  increamentCart,
  removeItemFromCart,
} from "../redux/cartSlice";
import Footer from "../components/Footer";

const CartDetails = ({ navigation }) => {
  const cartTotals = useSelector((state) => state.cart);
  const [cart, setcart] = useState([]);

  const [totalsAmount, setTotalsAmount] = useState();
  const [tots, setTots] = useState([]);

  async function getItems() {
    let data = await AsyncStorage.getItem("cartItems");

    if (data !== null) {
      data = JSON.parse(data);
      setcart(data);
    } else {
      setcart([]);
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("totals");
      const jsonVal = JSON.parse(value);
      if (jsonVal !== null) {
        setUserToken(jsonVal);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getItems();

    dispatch(getTotals());

    setTotalsAmount(cartTotals.cartTotalAmount);
    setTots(getData);
  }, [cart]);

  //console.log(tots);

  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const handleIncreament = (item) => {
    dispatch(increamentCart(item));
  };

  const handleDecreament = (item) => {
    dispatch(decremanetCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image
          resizeMode="contain"
          source={{ uri: item.image }}
          style={styles.image}
        />
        <View>
          <Text> {item.name}</Text>
          <Text> {item.price}</Text>
        </View>
      </View>
      <View style={styles.lower}>
        <TouchableOpacity
          style={styles.lower1}
          onPress={() => handleDelete(item)}
        >
          <Icon name="trash" size={23} />
          <Text style={{ marginLeft: 5 }}>REMOVE</Text>
        </TouchableOpacity>

        <View style={styles.lower2}>
          <Button onPress={() => handleDecreament(item)}>
            <Text style={{ color: "white" }}>-</Text>
          </Button>

          <Text> {item.cartQuantity}</Text>
          <Button onPress={() => handleIncreament(item)}>
            <Text style={{ color: "white" }}>+</Text>
          </Button>
        </View>
      </View>
    </View>
  );

  const Devider = () => <Divider my="2" />;

  const header = () => {
    return (
      <View>
        <Text
          style={{ textAlign: "center", fontWeight: "bold", marginTop: 10 }}
        >
          CART SUMMARY
        </Text>
      </View>
    );
  };

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListFooterComponent={
            <Footer
              total={totalsAmount}
              clearcart={handleClearCart}
              navigation={navigation}
            />
          }
          ListHeaderComponent={header}
          ItemSeparatorComponent={Devider}
        />
      ) : (
        <View style={styles.card}>
          <Text style={{ color: "blue", fontSize: 25 }}>No items in cart</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: 10,
    flex: 1,
  },
  upper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  lower: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  lower1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  lower2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("window").width / 2 - 60,
    height: Dimensions.get("window").width / 2 - 60,
  },
  button: {},

  card: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,
  },
});

export default CartDetails;
