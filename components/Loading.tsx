import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>날씨를 보여줄거야 기다료봐:~</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#399e67",
  },
  text: {
    fontSize: 30,
    color: "#070a08",
  },
});
