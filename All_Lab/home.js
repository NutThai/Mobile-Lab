import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Button,
    StyleSheet,
    Text,
    View,
    FlatList
} from "react-native";
var all_lab = ["Lab2_1", "Lab2_2", "Lab3_1", "Lab3_2"]
var header = [...new Set(all_lab.map(item => item.split('_')[0]))];

console.log(header)
// const lab_week = ({ week, assign }) => {
//     return (
//         <View>
//             <Text>{ }</Text>
//             <Button title={item} onPress={() => navigation.navigate(item)} />
//         </View>
//     )
// }
const Home = ({ navigation }) => {

    return (
        <View style={style1.container}>
            <FlatList style={{ margin: "100" }}
                data={all_lab}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return (
                        <View style={style1.btn}>
                            {/* <Text>{header}</Text> */}
                            <Button title={item} onPress={() => navigation.navigate(item)} />
                        </View>
                    )
                }
                }
            />
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
    btn: {
        padding: 10,
        width: 300,
        textAlign: "center",
        marginBottom: 5,
        fontSize: 20,
    },

});
export { Home };
export { all_lab }