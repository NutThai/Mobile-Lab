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

const lab2_1 = () => {
  return (
    <View style={style1.container}>
      <View style={style1.top}>
        <Image source={require("./assets/IT_Logo.png")} style={style1.logo} />
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
const lab2_2 = () => {
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
      <ScrollView style={style2.scroll}>
        <View style={style2.image}>
          <Image source={require("./assets/course-bach-it.jpg")} />
          <TouchableOpacity style={style2.button}>
            <Text>Information Technology</Text>
          </TouchableOpacity>
        </View>
        <View style={style2.image}>
          <Image source={require("./assets/course-bach-dsba.jpg")} />
          <TouchableOpacity style={style2.button}>
            <Text>Data Science and Business Analytics</Text>
          </TouchableOpacity>
        </View>
        <View style={style2.image}>
          <Image source={require("./assets/course-bach-bit.jpg")} />
          <TouchableOpacity style={style2.button}>
            <Text>Business Information Technology (International Program)</Text>
          </TouchableOpacity>
        </View>
        <View style={style2.image}>
          <Image source={require("./assets/course-bach-ait.jpg")} />
          <TouchableOpacity style={style2.button}>
            <Text>Artfificial Intelligence Technology</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
const style2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    zIndex: 10,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: 0,
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
  button:{
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
export default lab2_2;
