import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import ActionSheet from "react-native-actionsheet";
import RoundBtn from "./RoundBtn";

const Dropdown = () => {
  const actionSheetRef = useRef(null);

  const options = [
    "Cancel",
    "Statement",
    "Converter",
    "Background",
    "Add new account",
  ];
  const cancelIndex = 0;

  const showActionSheet = () => {
    actionSheetRef.current.show();
  };

  const handleSelect = (index) => {
    switch (index) {
      case 1:
        Alert.alert("Statement selected");
        break;
      case 2:
        Alert.alert("Converter selected");
        break;
      case 3:
        Alert.alert("Background selected");
        break;
      case 4:
        Alert.alert("Add new account selected");
        break;
      default:
        // Cancel or unknown option
        break;
    }
  };

  return (
    <View>
      <RoundBtn
        icon={"ellipsis-horizontal"}
        text={"More"}
        onPress={showActionSheet}
      />

      <ActionSheet
        ref={actionSheetRef}
        title="Choose an option"
        options={options}
        cancelButtonIndex={cancelIndex}
        onPress={(index: any) => handleSelect(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default Dropdown;
