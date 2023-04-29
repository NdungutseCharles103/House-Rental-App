import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { MonoText, PoppinText } from "../../components/StyledText";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const LandingScreen = () => {
  const { height } = Dimensions.get("window");
  return (
    <>
      {/* <Stack.Screen name="modal"
        options={{ title: "RentalResidance", headerShown: false }}
      /> */}
      <ImageBackground
        style={styles.main}
        source={require("../../assets/images/background.jpg")}
      >
        <LinearGradient
          style={{
            height: height / 2.5,
            padding: 20,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          colors={[`rgba(0,0,0,0)`, "#000"]}
        >
          <View style={{ flexDirection: "column" }}>
            <PoppinText style={{ fontSize: 35, fontWeight: "600" }}>
              Stay at Home in a Dreamy Place
            </PoppinText>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View></View>
              <Link
                href="/home"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  padding: 10,
                }}
              >
                <AntDesign name="arrowright" size={24} color="black" />
              </Link>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
