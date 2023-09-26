
import React from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import mealsReducer from "./store/reducers/mealsReducer";
// import คอมโพเนนต์ที่จำเป็น
import MyNavigator from "./navigation/MyNavigator";
export default function App() {
  return (
    <Provider store={store}>
      <MyNavigator />
    </Provider>
  )
}
const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
