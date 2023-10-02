import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class StudentInfo extends Component {
    constructor() {
        super();

        this.state = {
            key: "",
            studentId: "",
            name: "",
            gpa: "",
        };
    }

    componentDidMount() {
        console.log(this.props.route.params.id)
        const studentDoc = firebase
            .firestore()
            .collection("students")
            .doc(this.props.route.params.id);
        studentDoc.get().then((res) => {
            if (res.exists) {
                const student = res.data();
                this.setState({
                    key: res.id,
                    studentId: student.studentId,
                    name: student.name,
                    gpa: student.gpa,
                });
            } else {
                console.log("Document does not exist!!");
            }
        });
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    };

    updateStudent() {
        const updatestudentDoc = firebase
            .firestore()
            .collection("students")
            .doc(this.state.key);
        updatestudentDoc
            .set({
                studentId: this.state.studentId,
                name: this.state.name,
                gpa: this.state.gpa,
            })
            .then(() => {
                Alert.alert(
                    "Updating Alert",
                    "The Student was updated!! Pls check your DB!!"
                );
            });
    }
    deleteStudent() {
        const delstudentDoc = firebase
            .firestore()
            .collection("students")
            .doc(this.state.key);
        delstudentDoc.delete().then((res) => {
            Alert.alert(
                "Deleting Alert",
                "The Student was deleted!! Pls check your DB!!"
            );
            this.props.navigation.navigate("ViewStudent");
        });
    }
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
                    placeholder={"Student gpa"}
                    value={this.state.gpa + ""}
                    onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
                />
                <Button
                    title="Update Student"
                    onPress={() => {
                        this.updateStudent();
                    }}
                />
                <Button
                    title="Delete Student"
                    containerStyle={{ marginTop: 10 }}
                    onPress={() => {
                        this.deleteStudent();
                    }}
                />
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

export default StudentInfo;
