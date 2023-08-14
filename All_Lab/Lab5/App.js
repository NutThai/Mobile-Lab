import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { CategoriesScreen } from "../screens/CategoriesScreen";
import {CategoryMealScreen } from "../screens/CategoryMealScreen";
import {MealDetailsScreen} from "../screens/MealDetailsScreen";
const MealsNavigator = createNativeStackNavigator();

const Lab5 = () => {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  <NavigationContainer>
    <MealsNavigator.Navigator>
      <MealsNavigator.Screeen component={CategoriesScreen} />
    </MealsNavigator.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
export { Lab5 }