import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Arrow from "../images/arrow-left.svg";
import * as Location from "expo-location";

export default function MapScreen({ navigation, route }) {
  // const [location, setLocation] = useState(null);
  // const locationPost = route.params.location;
  // console.log(location);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      // let location = await Location.getCurrentPositionAsync({
      //   locationPost,
      // });
      // const coords = {
      //   latitude: location.coords.latitude,
      //   longitude: location.coords.longitude,
      // };
      // setLocation(coords);
    })();
  }, []);

  return (
    <>
      <View style={styles.titleWrap}>
        <TouchableOpacity
          style={styles.arrowSvg}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <Arrow></Arrow>
        </TouchableOpacity>
        <Text style={styles.title}>Map</Text>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: 50.5218788,
            longitude: 30.5020416,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsUserLocation={true}
        >
          <Marker
            title="I am here"
            coordinate={{latitude: 50.5218788, longitude: 30.5020416 }}
            description="Hello"
          />
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrap: {
    fontSize: 30,
    paddingTop: 55,
    paddingBottom: 7,
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  arrowSvg: {
    position: "absolute",
    left: 16,
    bottom: 7,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
