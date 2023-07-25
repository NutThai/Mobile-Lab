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
export {Lab3_1};