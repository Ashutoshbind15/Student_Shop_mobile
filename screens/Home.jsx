import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Home = () => {
  return (
    <View style={tw`items-center`}>
      <Text style={tw`text-blue-500 p-4`}>Home!</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
