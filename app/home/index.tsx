import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Home = () => {
  return (
    <>
      <Stack.Screen  options={{ headerShown: true, title: 'Home' }} />
      <View>
        <Text>Home</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
