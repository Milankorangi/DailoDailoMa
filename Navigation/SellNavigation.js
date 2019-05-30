import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Sell from '../src/Sell/Sell';
import Catagories from '../src/Sell/Catagories';
import Description from '../src/Sell/Description';
import ContactInformation from '../src/Sell/ContactInformation';

const SellNavigation = createStackNavigator({
      Sell: { screen: Sell },
      Catagories: { screen: Catagories },
      Description: { screen: Description },
      ContactInformation: { screen: ContactInformation }
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);


export default createAppContainer(SellNavigation);
