import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MonoText, PoppinText } from "../components/StyledText";
import { Redirect, Stack } from "expo-router";
import LandingScreen from "./landing";

const IndexPage = () => {
  
  return (
    <>
      <Stack.Screen options={{ title: "RentalResidance", headerShown: false }} />
      {/* <View>
        <MonoText>IndexPage</MonoText>
        <PoppinText>IndexPage</PoppinText>
      </View> */}
      <LandingScreen />
    </>
  );
};

export default IndexPage;

const styles = StyleSheet.create({});
