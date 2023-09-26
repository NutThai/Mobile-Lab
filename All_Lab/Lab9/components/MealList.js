import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

const MealList = (props) => {
  console.log(props.listData)
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetailScreen", { mealTitle: itemData.item.title, mealId: itemData.item.id, pev: itemData.item })
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
