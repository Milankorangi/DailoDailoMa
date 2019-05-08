import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import MainLogin from './src/MainLogin';
import Login from './src/Login';
import SignUp from './src/SignUp';
import DrawerNavigator from './Navigation/DrawerNavigator';
import Catagory from './src/Catagory/Catagory';

const AppNavigator = createStackNavigator({
      MainLogin: { screen: MainLogin },
      Login: { screen : Login },
      SignUp: { screen : SignUp },
      Home : { screen:  DrawerNavigator },
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    },
    {
    initialRouteName: 'MainLogin'
    }
);


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
