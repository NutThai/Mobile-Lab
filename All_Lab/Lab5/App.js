import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MealsNavigator = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <NavigationContainer>
      <MealsNavigator.Navigator>
        <MealsNavigator.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerStyle: { backgroundColor: "purple" }, title: "Meal Categories", headerTintColor: "white" }} />
        <MealsNavigator.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} options={({ route }) => ({ title: route.params.categoryTitle, headerStyle: { backgroundColor: "purple" }, headerTintColor: "white" })} />
        <MealsNavigator.Screen name="MealDetailScreen" component={MealDetailScreen} options={({ route }) => ({ title: route.params.mealTitle, headerStyle: { backgroundColor: "purple" }, headerTintColor: "white" })} />
      </MealsNavigator.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
