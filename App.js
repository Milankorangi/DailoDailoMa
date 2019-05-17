import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store/index';

import MainLogin from './src/MainLogin';
import Login from './src/Login';
import SignUp from './src/SignUp';
import DrawerNavigator from './Navigation/DrawerNavigator';

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
      <Provider store = {store} >
        <AppContainer />
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
