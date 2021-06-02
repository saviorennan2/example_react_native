import React,{useState} from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import Constants from "expo-constants";

import trafficLight from "./assets/trafficlight.png";
import trafficLightGreen from "./assets/traffic-light-green.png";
import trafficLightYellow from "./assets/traffic-light-yellow.png";
import trafficLightRed from "./assets/traffic-light-red.png";

export default function TrafficLight() {
  const [color, setColor] = useState("");

   let imageSource = trafficLight;
  if (color === "red") {
    imageSource = trafficLightRed;
  } else if (color === "yellow") {
    imageSource = trafficLightYellow;
  } else if (color === "green") {
    imageSource = trafficLightGreen;
  }

  return (
    <View style={styles.container}>

      <Image fadeDuration={0} source={imageSource} style={styles.image} />

      <View style={styles.buttonGroup}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#ce0100" }]}
          onPress={() => setColor("red")}
        >
          <Text style={styles.buttonText}>Vermelho</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#ff8300" }]}
          onPress={() => setColor("yellow")}
        >
          <Text style={styles.buttonText}>Amarelo</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#54a111" }]}
          onPress={() => setColor("green")}
        >
          <Text style={styles.buttonText}>Verde</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    maxWidth: "100%",
    maxHeight: screenHeight - Constants.statusBarHeight - 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: 80,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
