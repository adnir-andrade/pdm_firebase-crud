import { StyleSheet, ImageBackground } from "react-native";
import React, { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={require("../../../assets/images/background.jpg")}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
});
