import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const SafeView = ({ children }) => {
  return (
    <SafeAreaView style={styles.viewsafe}>
      <Text>{children}</Text>
    </SafeAreaView>
  );
};

export default SafeView;

const styles = StyleSheet.create({
  viewsafe: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    color: "blue",
  },
});
