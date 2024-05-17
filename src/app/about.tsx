import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import Card from "../components/containers/Card";
import GithubButton from "../components/ui/GithubButton";

export default function about() {
  return (
    <Background>
      <View style={styles.mainContainer}>
        <HeaderWithTitle title="Pets" />

        <Card>
          <View style={[styles.container, styles.firstContainer]}>
            <Text style={styles.title}>Pets</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.subtitle}>Desenvolvido por</Text>
            <Text style={styles.title}>Adnir Andrade</Text>
          </View>
          <GithubButton />
        </Card>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 30,
  },
  firstContainer: {
    marginTop: 45,
  },
  container: {
    marginBottom: 40,
    alignContent: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: "#cdab8f",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#bf9370",
  },
});
