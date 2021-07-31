import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Weather(props: { city: string, temp: number, weatherState: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textCity}>{props.city}</Text>
      <Text style={styles.text}>{props.weatherState} / {props.temp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#37c7f3",
  },
  textCity: {
    fontSize: 20,
    color: "#070a08",
  },
  text: {
    fontSize: 30,
    color: "#070a08",
  },
});
