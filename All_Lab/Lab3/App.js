import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
const major_list = [
  { image: require("./assets/course-bach-it.jpg"), major: "Information Technology" },
  { image: require("./assets/course-bach-dsba.jpg"), major: "Data Science and Business Analytics" },
  { image: require("./assets/course-bach-bit.jpg"), major: "Business Information Technology (International Program)" },
  { image: require("./assets/course-bach-ait.jpg"), major: "Artfificial Intelligence Technology" },
]
const MajorCard = ({ pic, major }) => {
  console.log("pic:", pic);
  console.log("major:", major);
  return (
    <View style={style2.image}>
      <Image source={pic} />
      <TouchableOpacity style={style2.button}>
        <Text>{major}</Text>
      </TouchableOpacity>
    </View>

  );
};

const Lab3_2 = () => {
  return (
    <SafeAreaView style={style2.container}>
      <View style={style2.top}>
        <View style={{ flex: 2 }}>
          <Image source={require("./assets/IT_Logo.png")} style={style2.logo} />
        </View>
        <View style={{ flex: 10 }}>
          <Text
            style={{
              color: "#010292",
              fontSize: 40,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Programs
          </Text>
        </View>
      </View>
      <View style={style2.scroll}>

        <FlatList
          data={major_list}
          renderItem={({ item }) =>
            <MajorCard pic={item.image} major={item.major} />
          }
          keyExtractor={item => item.major}
        />
      </View>
    </SafeAreaView>
  );
};

const style2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ABD9E6",
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    height: undefined,
    resizeMode: "contain",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
});
export {Lab3_2};
