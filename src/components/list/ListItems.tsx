import { View, Text, StyleSheet } from "react-native";
import React from "react";

type ListItemsProps = {
  id: number;
  model: string;
  year: number;
};

export default function ListItems({ id, model, year }: ListItemsProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>ID: {id}</Text>
      <Text style={styles.title}>Model: {model}</Text>
      <Text style={styles.title}>Year: {year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 4,
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 15,
    color: "#fff",
    textShadowColor: "cyan",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
