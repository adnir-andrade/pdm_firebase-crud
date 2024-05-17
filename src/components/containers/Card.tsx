import { View, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return <View style={[styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    width: "100%",
    borderRadius: 15,
    opacity: 0.75,
    backgroundColor: "black",
  },
});
