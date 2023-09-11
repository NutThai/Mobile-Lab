import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Main = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const scale = useRef(new Animated.Value(1)).current;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            const touches = evt.nativeEvent.touches;
            if (touches.length >= 2) {
                Animated.spring(scale, {
                    toValue: 3,
                    friction: 3,
                    useNativeDriver: false,
                }).start();
            }
            else {
                pan.setValue({
                    x: gestureState.dx,
                    y: gestureState.dy,
                })

            }
        },
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value,
            });
            pan.setValue({ x: 0, y: 0 });
        },
        onPanResponderRelease: () => {
            pan.flattenOffset();
            Animated.spring(scale, {
                toValue: 1,
                friction: 3,
                useNativeDriver: false,
            }).start();
        },
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                {...panResponder.panHandlers}
                style={[pan.getLayout(), { width: 180, height: 150, transform: [{ scale: scale }] }]}
                source={require("../assets/IT_Logo.png")}
            />
        </View>
    );
};


export default Main

const styles = StyleSheet.create({})