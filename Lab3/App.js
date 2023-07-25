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

var memo = []
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
const Lab3_1 = () => {
  const [text, setText] = useState('')
  return (
    <View style={style1.container}>
      <Text>สมุุดบันทึก</Text>
      <TextInput
        placeholder="เพิ่มข้อความที่นี้"
        style={style1.input}
        value={text}
        onChangeText={setText}
      />
      <View style={style1.btn}>
        <Button
          onPress={() => {
            if (text) {
              memo.push(text)
              console.log(memo)
              setText("")
            }
          }}
          title="บันทึก"
        />
      </View>
      <FlatList
        data={memo}
        renderItem={({ item }) => {
          return <Text>{item}</Text>
        }}
        keyExtractor={(index) => index}
      />
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
const style1 = StyleSheet.create({
  container: {
    marginVertical: 40,
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "70%",
    marginVertical: 10,
  },
  btn: {
    width: "50%"
  },
  outputtext: {
    fontSize: 20,
  },
  btncontainer: {
    backgroundColor: "#d0efff",
    width: "70%",
  },
  outputcontainer: {
    marginVertical: 10,
  },
});
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
export default Lab3_1;
