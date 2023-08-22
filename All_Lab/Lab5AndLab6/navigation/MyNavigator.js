import React from "react";
// import library ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

// // import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
// สร้าง navigator ตามโจทย์กำหนด

const FavNavigator = createNativeStackNavigator();
const MealsNavigator = createNativeStackNavigator();
const MealsFavTabNavigator = createBottomTabNavigator();
const FiltersNavigator = createNativeStackNavigator();
const MainNavigator = createDrawerNavigator();

const FavNav = () => {
  return (
    <FavNavigator.Navigator>
      <FavNavigator.Screen name="FavoritesScreen" component={FavoritesScreen} options={() => ({ title: 'Your Favorite', headerStyle: { backgroundColor: "purple" }, headerTintColor: "white" })} />
      <FavNavigator.Screen name="MealDetailScreen" component={MealDetailScreen} options={({ route }) => ({ title: route.params.mealTitle, headerStyle: { backgroundColor: "purple" }, headerTintColor: "white" })} />
    </FavNavigator.Navigator>
  )
}
const MealNav = () => {
  return (
    <MealsNavigator.Navigator>
      <MealsNavigator.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerStyle: { backgroundColor: "purple" }, title: "Meal Categories", headerTintColor: "white" }} />
      <MealsNavigator.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} options={({ route }) => ({ title: route.params.categoryTitle, headerStyle: { backgroundColor: "purple" }, headerTintColor: "white" })} />
      <MealsNavigator.Screen name="MealDetailScreen" component={MealDetailScreen} options={({ route }) => ({ title: route.params.mealTitle, headerStyle: { backgroundColor: "purple" }, headerTintColor: "white" })} />
    </MealsNavigator.Navigator>

  )
}
const TabNav = () => {
  return (
    <MealsFavTabNavigator.Navigator>
      <MealsFavTabNavigator.Screen options={{
        headerShown: false, tabBarIcon: ({ color, size }) => {
          return <AntDesign name="rest" size={size} color={color} />;
        }
      }} name="MealNav" component={MealNav} />
      <MealsFavTabNavigator.Screen options={{
        headerShown: false, tabBarIcon: ({ color, size }) => {
          return <AntDesign name="star" size={size} color={color} />;
        }
      }} name="FavNav" component={FavNav} />
    </MealsFavTabNavigator.Navigator>
  )
}
const FilNav = () => {
  return (
    <FiltersNavigator.Navigator>
      <FavNavigator.Screen name='FiltersScreen' component={FiltersScreen} />
    </FiltersNavigator.Navigator>
  )
}
// const MainNav =()=>{
//   return(

//   )
// }

const MyNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen options={{ headerShown: false }} name="TabNav" component={TabNav} />
        <MainNavigator.Screen options={{ headerShown: false }} name="FilNav" component={FilNav} />
      </MainNavigator.Navigator>

    </NavigationContainer>
  )
}
// สร้าง Navigator หลัก
export default MyNavigator 
