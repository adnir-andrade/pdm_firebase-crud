import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Card from "../../components/containers/Card";

type ListHeaderProps = {
  title: string;
};

export default function ListHeader({ title }: ListHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Card>
        <Text style={styles.header}>{title}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    textAlign: "center",
    color: "#fff",
    textShadowColor: "purple",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
  },
  headerContainer: {
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 20,
  },
});
