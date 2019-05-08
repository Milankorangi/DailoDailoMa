import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeNavigation from '../src/HomeNavigation';
import Catagory from '../src/Catagory/Catagory';

const CatNavigator = createStackNavigator({
      HomeNavigation: { screen: HomeNavigation },
      Catagory: { screen : Catagory },
    },
    {
        defaultNavigationOptions: {
          header: null
        }
    }
);


export default createAppContainer(CatNavigator);
