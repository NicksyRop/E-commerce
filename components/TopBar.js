import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Icon } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search"
        variant="filled"
        width="80%"
        borderRadius="10"
        py="2"
        px="2"
        mr="5"
        borderWidth="0"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.400"
            as={<Ionicons name="ios-search" />}
          />
        }
      />

      <Ionicons name="cart-outline" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3a3fde",
    padding: 5,
  },

  search: {},
});

export default TopBar;
