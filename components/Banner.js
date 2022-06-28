import React, { useState, useEffect } from "react";
import { View, Scrollview, Dimensions, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

var styles = {
  wrapper: {
    height: Dimensions.get("window").width / 2,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    height: Dimensions.get("window").width,
    width: Dimensions.get("window").width - 40,
  },
};

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
      <View testID="Hello" style={styles.slide1}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
          }}
        />
      </View>

      <View testID="Hello" style={styles.slide2}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
          }}
        />
      </View>
      <View testID="Hello" style={styles.slide3}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
          }}
        />
      </View>
    </Swiper>
  );
};

export default Banner;
