import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


import All from '../src/Message/All';
import Buying from '../src/Message/Buying';
import Selling from '../src/Message/Selling';



const MessageNavigation = createMaterialTopTabNavigator({
  All : {
    screen: All
  },
  Buying: {
    screen: Buying
  },
  Selling: {
    screen: Selling
  }
},
{
    tabBarOptions: {
      activeTintColor: '#262629',
      labelStyle: {
       fontSize: 12,
      },
      inactiveTintColor: '#8f939c',
      labelStyle: {
       fontSize: 12,
      },
      style: {
        backgroundColor: '#fff',
        fontSize: 12,

      },
      indicatorStyle: {
        backgroundColor: '#d2232a'
      },
      tabStyle: {
      
      }
    },
    initialRouteName: 'All'
  },
);

export default createAppContainer(MessageNavigation);