import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';

import Profile from '../src/Profile';
import Home from '../src/Home';
import MenuDrawer from '../component/MenuDrawer';
import TabNavigator from './TabNavigator';


const WIDTH = Dimensions.get('window').width;


const DrawerConfig = {
  drawerWidth: WIDTH*0.66,
  contentComponent: ({navigation}) => {
    return ( <MenuDrawer navigation= {navigation}/>)
  }
}

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator
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


