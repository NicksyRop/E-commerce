import React, { useState, useEffect } from "react";

import { View, Text, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Authentication from "../stacks/Authentication";

const Profile = () => {
  const [userToken, setUserToken] = useState();

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

  console.log("hello");
  return (
    <View style={{ marginTop: StatusBar.currentHeight, padding: 10 }}>
      {userToken ? (
        <View>
          <Text>Hello</Text>
        </View>
      ) : (
        <Authentication />
      )}
    </View>
  );
};

export default Profile;
