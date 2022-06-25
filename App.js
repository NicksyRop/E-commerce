import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartSlice from "./redux/cartSlice";
import { NativeBaseProvider } from "native-base";
import Toast from "react-native-toast-message";
import ProductDetails from "./screens/ProductDetails";

import Main from "./stacks/Main";
import Authentication from "./stacks/Authentication";
import Checkout from "./screens/Checkout";
import Register from "./screens/Register";
import * as Animatable from "react-native-animatable";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animatable.Image
          resizeMode="contain"
          animation="fadeInDownBig"
          duration={2000}
          style={{ height: 150, width: 150 }}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACACAMAAABDXWneAAAAb1BMVEX///8AAAD6+voIAAoLBQ0BAATExMRFREYQDBJcW11nZWi0s7QNCA5TUVPDwsRYVlisq6zz8vPT09MWExeCgYKmpaYhHiIbGxxsa2zq6erLysvc29zj4+ORkJJycXKXlpcvLTB6eXs6NzonJScREBBqewnIAAAEXklEQVR4nO2Z63aqOhSFWRAgctMQoNwUCOf9n/GsgChW6Gi7YejeY31/WmIi07guM2gYBEEQBEEQBEEQBEEQBEEQBEEQBEH8PRSx+WoJ36UI/0tfreG7OADHv2VjHW4dSOv2kNbfYwrzkxxzxLhpvV49Tvn8Nk8jWyP85BiGl6a6jcRpknsD6aDVM53zxfO6tJ4vyr08ORW3keI0jPhiR6mRC8CCwAaZjrsicglgDQDEqJW7HgNbX2XXKYYTDlMAlD8OmL66joTlflLB4qAJJHR6oHBB2nBFFahVcks+TDF8uI5wDmOjOOt/NdKCaCepFcigPZdxfApBDvfNcSQ/OaXGEToGpORZF5VO6toSGpxS9npRVEaNYhL8QbxkqnHKKOk57+N9tF4gUGOgihy4woDEnXnoqVqrdMYpHcgWZ4d20I+hWx+BucIQbgDHMXSrLIDDLlKrftKBIddyOOFGc/chPVCrfZoucEpjFCCzKSjrTOJ37gNvpyxzpITC2IHIYuGtzpwBEiMGfvyklbu3e6cAHoY4826LOoCzXnmeBsSBwy7p5cM1W64XuSFAylTM6uRDL4gsKzRO+jPN1CcYSXDbeiOx98guUaSW5VXxSNVYqNU4Yo65XRrVU3n6hlbPtvy5VsfYmMrTVUjyqT4BZjlqLVAst3SFcpPSfA+tRYuaMMVlcGcIiCLJUCnjkoHsxFtoxfrzESop2+ONMB8rkVmm3cHt9UYfzDfQWrg8SMXJhou4M0spUVS+h6Ebla/XWvW8N3XqX76YhLftfqN14zoQ97zVWmf19Rmf2V78pBXdwP0Dnj9rNXO2dX0tZaBM3bdsf31Sg0Ke91X3ranlFxnHXZxrLbfvW6VkrqGdyuQHFqh1133WarQBC8feZl7QRBRzrcJltrutVH3XI/6pbMm49lljO9CvVIPFKmMnwXKmxHMdMCLcujbF+WhaB581aK2rqorT1rpv+lb4urMjJ0BbZ32M9JjApWJ8wEJziEIWtGJsoFvNsmxytFprrNq2ze6OdkNOUwXQ5wJ+RbvTBg3BcMEAXNQeMXum1bbDYbWCAKcE0A/CPNt2GhgXqS/i/5ekt8IjfK/NBmRY6xdk1mrcbjg7VR+zClWr60VxVrhAXQ9pel/r1uZcus0OfrCZ2bgHfMv2HgbqeQUSi4k45tZux9gEhuPIM1HAfpzHD71ge7q55ZwTY+H96ZvtrBXt8fLbVx+6+f6MnbUe1s7GVcuznz6P2FlruNa1a8X5T3N5X60mnpKX2wuaRagXX1lnNaA2QahgRZE4BrDqEFaovGTHx1ii59byN20eNvd0f4iQPFuJytza8wv9BcXg5Ra5rFXeV1HgkXolxLCjvdePRKj1sKL1vOYUXkUF7LLSndJ301qDVPH0q8ADAnPrvbSaKgh6dwmFXn+nh72/xcfzB1uCyy8fGbwER1lgL3H7AeONKJzIWeLNAoAgCIIgCIIgCIIgCIIgCIIgCIL4Z/kfzF1H93zt0YwAAAAASUVORK5CYII=",
          }}
        />
      </View>
    );
  }

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
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Authenitcation" component={Authentication} />
            <Stack.Screen name="Register" component={Register} />
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
