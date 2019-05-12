import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Catagory from '../src/Catagory/Catagory';
import HomeNavigation from '../src/HomeNavigation';

const CatNavigator = createStackNavigator({
      Home : { screen: HomeNavigation},
      Catagory: { screen : Catagory },
    },
    {
        defaultNavigationOptions: {
          header: null,
          
        },
    
    navigationOptions: {
      header: null,
      tabBarVisible : false,
      headerMode: 'none'
    }
  },
);


export default createAppContainer(CatNavigator);
