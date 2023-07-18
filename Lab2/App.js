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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const major_list = [
  { image: require("./assets/course-bach-it.jpg"), major: "Information Technology" },
  { image: require("./assets/course-bach-dsba.jpg"), major: "Data Science and Business Analytics" },
  { image: require("./assets/course-bach-bit.jpg"), major: "Business Information Technology (International Program)" },
  { image: require("./assets/course-bach-ait.jpg"), major: "Artfificial Intelligence Technology" },
]
const MajorCard = ({ pic, major }) => {
  return (
    <View style={style2.image}>
      <Image source={pic} />
      <TouchableOpacity style={style2.button}>
        <Text>{major}</Text>
      </TouchableOpacity>
    </View>
  )
}
const Lab2_1 = props => {
  const onPress = () => {
    props.navigation.navigate('Lab2_2');
  };
  
  return (
    <View style={style1.container}>
      <View style={style1.top}>
        <Image source={require("./assets/IT_Logo.png")} style={style1.logo} />
        <Text style={style1.head}>คณะเทคโนโลยีสารสรเทศ</Text>
        <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={style1.bot}>
        <View style={style1.button}>
          <Button title="PROGRAMS" onPress={onPress}/>
        </View>

        <View style={style1.button}>
          <Button title="ABOUT US" />
        </View>
      </View>
    </View>
  );
};
const Lab2_2 = () => {
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
        <View>
          {major_list.map((element,index) => (
            <MajorCard key={index} pic={element.image} major={element.major} />
          ))}
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

const App = () => {
  //const
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lab2_1" component={Lab2_1} />
        <Stack.Screen name="Lab2_2" component={Lab2_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;