import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Lab2_1 = () => {
  return (
    <View style={style1.container}>
      <View style={style1.top}>
        <Image source={require("../assets/IT_Logo.png")} style={style1.logo} />
        <Text style={style1.head}>คณะเทคโนโลยีสารสรเทศ</Text>
        <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={style1.bot}>
        <View style={style1.button}>
          <Button title="PROGRAMS" />
        </View>

        <View style={style1.button}>
          <Button title="ABOUT US" />
        </View>
      </View>
    </View>
  );
};
const style1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bot: {
    flex: 2,
  },
  button: {
    padding: 10,
    width: 200,
    textAlign: "center",
    marginBottom: 5,
    fontSize: 20,
  },
  logo: {
    width: "25%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  head: {
    fontSize: 20,
    marginBottom: 5,
  },
});
export { Lab2_1 };