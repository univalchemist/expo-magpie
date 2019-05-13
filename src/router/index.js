import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Start from '../screens/StartPage';
import Home from '../screens/HomePage';

//Login stack navigator
const StackLogin = createStackNavigator(
  {
    StartScreen: Start,
    HomeScreen: Home,
  }, { headerMode: 'none' })

export default AppContainer = createAppContainer(createSwitchNavigator(
  {
    Login: StackLogin,
  },
  {
    initialRouteName: 'Login'
  }
))
