import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  return (
    <View style={styles.screen}>
      <MealList listData={favoriteMeals} navigation={navigation} />
    </View>

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างบนแทน

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
