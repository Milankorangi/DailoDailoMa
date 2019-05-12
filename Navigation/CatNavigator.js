import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Catagory from '../src/Catagory/Catagory';
import HomeNavigation from '../src/HomeNavigation';
import SellNavigation from './SellNavigation';

// import Sell from '../src/Sell/Sell';
// import Catagories from '../src/Sell/Catagories';
// import Description from '../src/Sell/Description';
// import ContactInformation from '../src/Sell/ContactInformation';
// import FinalSell from '../src/Sell/FinalSell';


const CatNavigator = createStackNavigator({
      Home : { screen: HomeNavigation},
      Catagory: { screen : Catagory },
      SellNavigation: { screen : SellNavigation },
    //   Sell: { screen: Sell },
    //   Catagories: { screen: Catagories },
    //   Description: { screen: Description },
    //   ContactInformation: { screen: ContactInformation },
    //   FinalSell: { screen: FinalSell}
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);


export default createAppContainer(CatNavigator);
