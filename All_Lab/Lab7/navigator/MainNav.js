//import liraries
import React, { useRef } from "react";
import { Animated, View, Text, StyleSheet, Button, Easing } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();




// create a component
const MainNav = () => {
    const springVal = useRef(new Animated.Value(0.3)).current;
    const spring = () => {
        Animated.spring(springVal, {
            toValue: 1,
            // tension: 10,
            friction: 1,
            // speed: 20,
            useNativeDriver: true,
        }).start(() => {
            springVal.setValue(0.3);
        });
    }
    const Spring = () => {
        return (
            <View style={styles.container}>
                <View>
                    <Animated.Image
                        style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
                        source={require("../assets/IT_Logo.png")} />
                </View>
                <View style={{ width: "100%" }}>
                    <Button title="Spring" onPress={spring} />
                </View>
            </View>
        )
    }

    const ani1 = useRef(new Animated.Value(1)).current
    const ani2 = useRef(new Animated.Value(0)).current
    const spin = ani2.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ["0deg", "360deg","0deg"]
    })
    const sequence = () => {

        Animated.sequence([
            Animated.timing(ani1, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(ani1, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(ani2, {
                toValue: 2,
                duration: 3000,
                useNativeDriver: true,
            })
        ]).start(() => {
            ani1.setValue(1)
            ani2.setValue(0)
        })
    }
    const Sequence = () => {
        return (
            <View style={styles.container}>
                <View>
                    <Animated.Image
                        style={{ width: 180, height: 150, opacity: ani1, transform: [{ rotate: spin }] }}
                        source={require("../assets/IT_Logo.png")} />
                </View>
                <View style={{ width: "100%" }}>
                    <Button title="Run Sequence" onPress={sequence} />
                </View>
            </View>
        )
    }

    const ani3 = useRef(new Animated.Value(0.3)).current;
    const ani4 = useRef(new Animated.Value(0)).current;
    const jerk = ani4.interpolate({
        inputRange: [0, 1, 2, 3, 4, 5, 6, 7],
        outputRange: [0, -100, 100, -75, 75, -50, 50, 0]
    })
    const parallel = () => {
        Animated.parallel([
            Animated.sequence([
                Animated.spring(ani3, {
                toValue: 1,
                friction: 1,
                useNativeDriver: true,
            }),Animated.spring(ani3, {
                toValue: 0.3,
                friction: 3,
                useNativeDriver: true,
            })
            
        ]),
            Animated.timing(ani4, {
                toValue: 7,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start(() => {
            ani3.setValue(0.3),
                ani4.setValue(0)
        })
    }

    const Parallel = () => {
        return (
            <View style={styles.container}>
                <View>
                    <Animated.Image
                        style={{ width: 180, height: 150, transform: [{ scale: ani3 }] }}
                        source={require("../assets/IT_Logo.png")}
                    />
                    <Animated.Text style={{ transform: [{ translateX: jerk }] }}>
                        Welcome to Faculty of IT!
                    </Animated.Text>
                </View>
                <View style={{ width: "100%" }}>
                    <Button title="Run Parallel" onPress={parallel} />
                </View>
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Spring" component={Spring} />
                <Tab.Screen name="Sequence" component={Sequence} />
                <Tab.Screen name="Parallel" component={Parallel} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',

    },
});

//make this component available to the app
export default MainNav;
