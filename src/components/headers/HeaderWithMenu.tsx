import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter, useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import useToken from "../../hooks/useToken";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithMenu({ title }: HeaderWithTitleProps) {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
  const navigation = useNavigation();
  const { deleteToken } = useToken();

  const options = ["About", "Create", "Read", "Update", "Delete", "Logout"];
  const destructiveButtonIndex = options.indexOf("Logout");

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === options.indexOf("About")) router.push("/about");
        if (buttonIndex === options.indexOf("Create"))
          router.push("/petCreate");
        if (buttonIndex === options.indexOf("Read")) router.push("/petList");
        if (buttonIndex === options.indexOf("Update"))
          router.push("/petUpdate");
        if (buttonIndex === options.indexOf("Delete"))
          router.push("/petDelete");

        if (buttonIndex === options.indexOf("Logout")) {
          deleteToken();
          navigation.reset({
            index: 0,
            // @ts-ignore
            routes: [{ name: "index" }],
          });
        }
      }
    );
  };

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        headerBackground: () => (
          <ImageBackground
            source={require("../../../assets/images/logo.png")}
            style={styles.background}
            resizeMode="contain"
          />
        ),
        title,
        headerRight: () => (
          <TouchableOpacity style={styles.menuIcon}>
            <Ionicons
              name="menu-outline"
              size={24}
              color="#cdab8f"
              onPress={handleOpen}
            />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          color: "#cdab8f",
        },
        headerTintColor: "#cdab8f",
      }}
    ></Stack.Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#cdab8f",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuIcon: {
    padding: 5,
  },
  background: {
    height: "100%",
    opacity: 0.9,
    backgroundColor: "black",
  },
});
