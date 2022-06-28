import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  BackHandler,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Login";
import Authentication from "../stacks/Authentication";
import { Button } from "native-base";

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

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (e) {
      console.log("Done.");
    }
  };

  const logout = () => {
    removeValue();
    BackHandler.exitApp();
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userToken);
  return (
    <View style={styles.container}>
      {userToken ? (
        <View>
          <View
            style={{
              height: Dimensions.get("window").height / 2,
              backgroundColor: "#fcba03",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <Image
              source={require("../assets/avatar.png")}
              resizeMode="center"
              style={{ height: 100, width: 100, alignSelf: "center" }}
            />

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text style={{ color: "white", fontSize: 30 }}>John Deoe</Text>
              <Text style={{ color: "white", fontSize: 20 }}>
                johndeoe@gmail.com
              </Text>
            </View>
          </View>

          <View>
            <Button
              onPress={logout}
              style={{ width: "50%", alignSelf: "center", marginTop: 50 }}
            >
              Logout
            </Button>
          </View>
        </View>
      ) : (
        <Authentication />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    display: "flex",
    flex: 1,
  },
});

export default Profile;
