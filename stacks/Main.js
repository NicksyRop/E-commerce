import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Icon from "react-native-vector-icons/Feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsList from "../screens/ProductsList";
import CartDetails from "../screens/CartDetails";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
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
  );
};

export default Main;
