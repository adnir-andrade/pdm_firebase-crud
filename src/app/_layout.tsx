import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import React from "react";

function _layout() {
  return (
    <ActionSheetProvider>
      <Stack />
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(_layout);

export default ConnectedApp;
