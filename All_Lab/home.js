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


const Home = ({ navigation }) => {
    return (
        <View style={style1.container}>
            <Button title="Lab2_1" onPress={() => navigation.navigate('Lab2_1')} />
            <Button title="Lab2_2" onPress={() => navigation.navigate('Lab2_2')} />
            <Button title="Lab3_1" onPress={() => navigation.navigate('Lab3_1')} />
            <Button title="Lab3_2" onPress={() => navigation.navigate('Lab3_2')} />
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
export { Home };