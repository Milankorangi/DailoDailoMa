import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import Profile from '../src/Profile';
// import Notification from '../src/Notification';
// import Message from '../src/Message';

import MenuDrawer from '../component/MenuDrawer';
import HomeNavigation from '../src/HomeNavigation';



const WIDTH = Dimensions.get('window').width;


const DrawerConfig = {
  drawerWidth: WIDTH*0.66,
  contentComponent: ({navigation}) => {
    return ( <MenuDrawer navigation= {navigation}/>)
  },
  hideStatusBar: true
}

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigation
  },
  Profile: {
    screen: Profile,
  },
  // Notification: {
  //   screen: Notification
  // },
  // PrivacyPolicy: {
  //   screen: PrivacyPolicy
  // },
  // ReportProblem: {
  //   screen: ReportProblem
  // },
  // LogOut : {
  //   screen: LogOut
  // }
},
DrawerConfig
);



export default createAppContainer(DrawerNavigator);


