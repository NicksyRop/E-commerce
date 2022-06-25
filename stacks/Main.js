import React, { useEffect, useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Icon from "react-native-vector-icons/Feather";
import ProductsList from "../screens/ProductsList";
import CartDetails from "../screens/CartDetails";
import Profile from "../screens/Profile";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../redux/cartSlice";

const Main = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totals, setTotals] = useState();

  useEffect(() => {
    dispatch(getTotals());

    setTotals(cart.cartTotalQuantity);
  }, [cart]);

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
          tabBarBadge: totals,
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
