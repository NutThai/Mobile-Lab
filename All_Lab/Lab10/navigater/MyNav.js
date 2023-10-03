import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AddStudent from '../screen/AddStudent'
import ViewStudent from '../screen/ViewStudent'
import StudentInfo from '../screen/StudentInfo'

const mainNav = createStackNavigator()
const MyNav = () => {

  return (
    <mainNav.Navigator>
      <mainNav.Screen name='AddStudent' component={AddStudent} options={{ title: "Add Student", headerStyle: {backgroundColor:"#007eed"}}} />
      <mainNav.Screen name='ViewStudent' component={ViewStudent} options={{ title: "Student List" , headerStyle: {backgroundColor:"#007eed"}}} />
      <mainNav.Screen name='StudentInfo' component={StudentInfo} options={{ title: "Student Info" , headerStyle: {backgroundColor:"#007eed"}}} />
    </mainNav.Navigator>
  )
}

export default MyNav
