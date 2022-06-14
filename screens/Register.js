import React from "react";

import { View, StatusBar, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Icon, Input, ScrollView, Text } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Register = () => {
  const [show, setShow] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          resizeMode="contain"
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACACAMAAABDXWneAAAAb1BMVEX///8AAAD6+voIAAoLBQ0BAATExMRFREYQDBJcW11nZWi0s7QNCA5TUVPDwsRYVlisq6zz8vPT09MWExeCgYKmpaYhHiIbGxxsa2zq6erLysvc29zj4+ORkJJycXKXlpcvLTB6eXs6NzonJScREBBqewnIAAAEXklEQVR4nO2Z63aqOhSFWRAgctMQoNwUCOf9n/GsgChW6Gi7YejeY31/WmIi07guM2gYBEEQBEEQBEEQBEEQBEEQBEEQBEH8PRSx+WoJ36UI/0tfreG7OADHv2VjHW4dSOv2kNbfYwrzkxxzxLhpvV49Tvn8Nk8jWyP85BiGl6a6jcRpknsD6aDVM53zxfO6tJ4vyr08ORW3keI0jPhiR6mRC8CCwAaZjrsicglgDQDEqJW7HgNbX2XXKYYTDlMAlD8OmL66joTlflLB4qAJJHR6oHBB2nBFFahVcks+TDF8uI5wDmOjOOt/NdKCaCepFcigPZdxfApBDvfNcSQ/OaXGEToGpORZF5VO6toSGpxS9npRVEaNYhL8QbxkqnHKKOk57+N9tF4gUGOgihy4woDEnXnoqVqrdMYpHcgWZ4d20I+hWx+BucIQbgDHMXSrLIDDLlKrftKBIddyOOFGc/chPVCrfZoucEpjFCCzKSjrTOJ37gNvpyxzpITC2IHIYuGtzpwBEiMGfvyklbu3e6cAHoY4826LOoCzXnmeBsSBwy7p5cM1W64XuSFAylTM6uRDL4gsKzRO+jPN1CcYSXDbeiOx98guUaSW5VXxSNVYqNU4Yo65XRrVU3n6hlbPtvy5VsfYmMrTVUjyqT4BZjlqLVAst3SFcpPSfA+tRYuaMMVlcGcIiCLJUCnjkoHsxFtoxfrzESop2+ONMB8rkVmm3cHt9UYfzDfQWrg8SMXJhou4M0spUVS+h6Ebla/XWvW8N3XqX76YhLftfqN14zoQ97zVWmf19Rmf2V78pBXdwP0Dnj9rNXO2dX0tZaBM3bdsf31Sg0Ke91X3ranlFxnHXZxrLbfvW6VkrqGdyuQHFqh1133WarQBC8feZl7QRBRzrcJltrutVH3XI/6pbMm49lljO9CvVIPFKmMnwXKmxHMdMCLcujbF+WhaB581aK2rqorT1rpv+lb4urMjJ0BbZ32M9JjApWJ8wEJziEIWtGJsoFvNsmxytFprrNq2ze6OdkNOUwXQ5wJ+RbvTBg3BcMEAXNQeMXum1bbDYbWCAKcE0A/CPNt2GhgXqS/i/5ekt8IjfK/NBmRY6xdk1mrcbjg7VR+zClWr60VxVrhAXQ9pel/r1uZcus0OfrCZ2bgHfMv2HgbqeQUSi4k45tZux9gEhuPIM1HAfpzHD71ge7q55ZwTY+H96ZvtrBXt8fLbVx+6+f6MnbUe1s7GVcuznz6P2FlruNa1a8X5T3N5X60mnpKX2wuaRagXX1lnNaA2QahgRZE4BrDqEFaovGTHx1ii59byN20eNvd0f4iQPFuJytza8wv9BcXg5Ra5rFXeV1HgkXolxLCjvdePRKj1sKL1vOYUXkUF7LLSndJ301qDVPH0q8ADAnPrvbSaKgh6dwmFXn+nh72/xcfzB1uCyy8fGbwER1lgL3H7AeONKJzIWeLNAoAgCIIgCIIgCIIgCIIgCIIgCIL4Z/kfzF1H93zt0YwAAAAASUVORK5CYII=",
          }}
          style={{ height: 100, width: 100 }}
        />
      </View>

      <ScrollView>
        <View style={styles.bottom}>
          <View style={{ marginBottom: 15 }}>
            <Input
              w={{
                base: "85%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Username"
            />
          </View>

          <View style={{ marginBottom: 15 }}>
            <Input
              w={{
                base: "85%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="email" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Email"
            />
          </View>

          <View style={{ marginBottom: 15 }}>
            <Input
              w={{
                base: "85%",
                md: "25%",
              }}
              type={show ? "text" : "password"}
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              placeholder="Password"
            />
          </View>

          <View style={{ marginBottom: 15 }}>
            <Input
              w={{
                base: "85%",
                md: "25%",
              }}
              type={showConfirm ? "text" : "password"}
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={showConfirm ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShowConfirm(!showConfirm)}
                />
              }
              placeholder="Confirm Password"
            />
          </View>

          <Button w="85%">
            <Text style={{ color: "white", fontSize: 18 }}>Register</Text>
          </Button>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Have an Accaount ?
          </Text>

          <Button w="85%" onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    display: "flex",
    flex: 1,
  },
  top: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    flex: 3,
  },
});
export default Register;
