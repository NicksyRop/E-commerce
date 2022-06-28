import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Authentication from "../stacks/Authentication";
import { NativeBaseProvider } from "native-base";

const Checkout = () => {
  const [userToken, setUserToken] = useState();
  const [userId, setId] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      const jsonVal = JSON.parse(value);
      if (jsonVal !== null) {
        setUserToken(jsonVal);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NativeBaseProvider>
      {userToken ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Checkout Page</Text>
        </View>
      ) : (
        <Authentication />
      )}
    </NativeBaseProvider>
  );
};

export default Checkout;
