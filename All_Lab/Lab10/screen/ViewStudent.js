import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../firebaseDB";
import { ListItem } from "react-native-elements";

class ViewStudent extends Component {
    constructor() {
        super();

        this.studentCollection = firebase.firestore().collection("students");

        this.state = {
            students_list: [],
        };
    }

    getCollection = (querySnapshot) => {
        const all_data = [];
        querySnapshot.forEach((res) => {
            //   console.log("res: ", res);
            //   console.log("res.data() : ", res.data());

            const { studentId, name, gpa } = res.data();
            all_data.push({
                key: res.id,
                studentId,
                name,
                gpa,
            });
        });
        // console.log("all_data : ", all_data);
        this.setState({
            students_list: all_data,
        });
    };

    componentDidMount() {
        this.unsubscribe = this.studentCollection.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    navigateToStudentInfo = (id) => {
        // Navigate to the "ViewStudent" screen
        this.props.navigation.navigate("StudentInfo", { id: id });
    };
    render() {
        return (
            <ScrollView>
                {this.state.students_list.map((item, i) => {
                    return (
                        <ListItem key={i} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{item.studentId}</ListItem.Title>
                                <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                                <ListItem.Subtitle>{item.gpa}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron onPress={() => this.navigateToStudentInfo(item.key)} />
                        </ListItem>
                    );
                })}
            </ScrollView>
        );
    }
}
//make this component available to the app
export default ViewStudent;
