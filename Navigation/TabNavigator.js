import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';


import Home from '../src/Home';
import Store from '../src/Store';
import Favourite from '../src/Favourite';

const TabNavigator = createMaterialTopTabNavigator({
    Home : {
        screen: Home
      },
      Store: {
        screen: Store
      },
      Favourite: {
        screen: Favourite
      }
    },
     
    {
      tabBarOptions: {
        activeTintColor: 'white',
        labelStyle: {
         fontSize: 12,
        },
        style: {
          backgroundColor: '#d2232a',
          fontSize: 12,
         

        },
        indicatorStyle: {
          backgroundColor: '#fff'
        }
      },
      initialRouteName: 'Home'
    },

    );

    

export default createAppContainer(TabNavigator);

