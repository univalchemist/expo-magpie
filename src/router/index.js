import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from '../screens/HomePage';
import SignUp from '../screens/Auth';
import WaitingRoom from '../screens/Waiting/WaitingRoom';
import JoinGame from '../screens/Waiting/JoinGame';

//Auth stack navigator
const StackAuth = createStackNavigator(
  {
    StartScreen: SignUp,
  }, { headerMode: 'none' })

//Waiting stack navigator
const StackWaiting = createStackNavigator(
  {
    WaitingRoom: WaitingRoom,
    JoinGame: JoinGame
  }, { headerMode: 'none' })

//Home stack navigator
const StackHome = createStackNavigator(
  {
    Home: Home,
  }, { headerMode: 'none' })

export default AppContainer = createAppContainer(createSwitchNavigator(
  {
    Auth: StackAuth,
    WaitingStack: StackWaiting,
    HomeStack: StackHome
  },
  {
    initialRouteName: 'Auth'
  }
))
