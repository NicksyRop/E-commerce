import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useSelector } from "react-redux";

import ProductsList from "./screens/ProductsList";
import ProductDetails from "./screens/ProductDetails";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartSlice from "./redux/cartSlice";
import CartDetails from "./screens/CartDetails";
import { NativeBaseProvider } from "native-base";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/Feather";
import Profile from "./screens/Profile";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Tab.Navigator>
            <Tab.Screen
              name="Products"
              component={ProductsList}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="Cart"
              component={CartDetails}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Icon name="shopping-cart" color={color} size={size} />
                ),
                tabBarBadge: 3,
              }}
            />

            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Icon name="user" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
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
