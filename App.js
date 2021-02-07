import React, {Component} from 'react';
import 'react-native-gesture-handler';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListActivity from "./app/screens/ListActivity";

import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


export default class App extends React.Component {
  render() {
    return<AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
    WelcomeScreen: { 
      screen: WelcomeScreen, 
      navigationOptions: {
        title: null,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
        }
      }
    }, 
    ListActivity: { 
      screen: ListActivity, 
      navigationOptions: {
        title: null,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
        }
      }
    }
  },
  {
    initialRouteName: 'WelcomeScreen',
  }
);

const AppContainer = createAppContainer(AppNavigator);

