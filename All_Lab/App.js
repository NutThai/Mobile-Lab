import React from "react";
import { Home } from "./home";
import { Lab2_1 } from "./Lab2/lab2_1";
import { Lab2_2 } from "./Lab2/lab2_2";
import { Lab3_1 } from "./Lab3/lab3_1";
import { Lab3_2 } from "./Lab3/lab3_2";
import { Lab4 } from "./Lab4/lab4";
import { all_lab } from "./home";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lab2_1" component={Lab2_1} />
        <Stack.Screen name="Lab2_2" component={Lab2_2} />
        <Stack.Screen name="Lab3_1" component={Lab3_1} />
        <Stack.Screen name="Lab3_2" component={Lab3_2} />
        <Stack.Screen name="Lab4" component={Lab4} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;