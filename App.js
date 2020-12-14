/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native'





import Inputdata from './component/screens/inputdata'
import Login from './component/screens/login'
import Detail from './component/screens/detail';
import Home from './component/screens/home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


class App extends Component {

 
    home = () =>{
    
    return(
      <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Register" component={Inputdata} />
       <Stack.Screen name="BottomTabs" component={this.bottomTab} />
     </Stack.Navigator>
     </NavigationContainer>
    
    )
    }
    
    bottomTab = () =>{
    return(
     
        
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Detail" component={Detail} />
          </Tab.Navigator>
      
  
    
    )
    
    
    }


  render() {
    return (
      this.home()
  
      
             
     
               
              
         
 
        

)}
}


export default App;
