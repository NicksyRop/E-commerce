import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartSlice from "./redux/cartSlice";
import { NativeBaseProvider } from "native-base";
import Toast from "react-native-toast-message";
import ProductDetails from "./screens/ProductDetails";

import Main from "./stacks/Main";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </Stack.Navigator>
        </NativeBaseProvider>
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
