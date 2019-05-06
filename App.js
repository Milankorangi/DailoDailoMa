import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import MainLogin from './src/MainLogin';
import Login from './src/Login';
import SignUp from './src/SignUp';
import HomeNavigation from './src/HomeNavigation';

import DrawerNavigator from './Navigation/DrawerNavigator';




const AppNavigator = createStackNavigator({

      MainLogin: {
        screen: MainLogin
      },

      Login: {
        screen : Login
      },
      SignUp: {
        screen : SignUp
      },
      Home : {
        screen:  DrawerNavigator
      }
  },
  {
    initialRouteName: 'MainLogin'
  });

  AppNavigator.navigationOptions = {
    header: null
  };

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  render() {
    return (
     <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
