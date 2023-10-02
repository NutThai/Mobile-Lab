import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AddStudent from '../screen/AddStudent'
import ViewStudent from '../screen/ViewStudent'
import StudentInfo from '../screen/StudentInfo'

const mainNav = createStackNavigator()
const MyNav = () => {
    
  return (
    <mainNav.Navigator>
        <mainNav.Screen name='AddStudent' component={AddStudent} />
        <mainNav.Screen name='ViewStudent'component={ViewStudent} />
        <mainNav.Screen name='StudentInfo'component={StudentInfo} />
    </mainNav.Navigator>
  )
}

export default MyNav
