import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class AddStudent extends Component {
    constructor() {
        super();

        this.subjCollection = firebase.firestore().collection("students");

        this.state = {
            studentId: "",
            name: "",
            gpa: "",
        };
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    };

    storeSubject() {
        this.subjCollection
            .add({
                studentId: this.state.studentId,
                name: this.state.name,
                gpa: this.state.gpa,
            })
            .then((res) => {
                this.setState({
                    studentId: "",
                    name: "",
                    gpa: "",
                });
                Alert.alert(
                    "Adding Alert",
                    "New studen was added!! Pls check your DB!!"
                );
            });
    }
    navigateToViewStudent = () => {
        // Navigate to the "ViewStudent" screen
        this.props.navigation.navigate("ViewStudent");
    };
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../assets/IT_Logo.png")}
                    style={{ width: 120, height: 100 }}
                    containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
                />
                <Input
                    placeholder={"Student Id"}
                    value={this.state.studentId}
                    onChangeText={(val) => this.inputValueUpdate(val, "studentId")}
                />
                <Input
                    placeholder={"Student Name"}
                    value={this.state.name}
                    onChangeText={(val) => this.inputValueUpdate(val, "name")}
                />
                <Input
                    placeholder={"Student GPA"}
                    value={this.state.gpa}
                    onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
                />
                <Button title="Add Student" onPress={() => this.storeSubject()} />
                <Button title="View Student" containerStyle={{ marginTop: 10 }} onPress={() => this.navigateToViewStudent()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
});

export default AddStudent;
