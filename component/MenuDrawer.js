import React from 'react';
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import ad from '../assets/store-ad.png';
import profile from '../assets/22.png';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return(
      <TouchableOpacity 
          style={{height: 40}}
          onPress= {()=> {this.props.navigation.navigate(nav)}}>
            <Text style= {styles.link}> {text}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return(
      <View style= {styles.container} >
          <View style={styles.topLinks} > 
              <View style= {styles.profile}>
               
                  <View style={styles.picture}>
                    <Image source= {profile} style= {styles.image} />
                  </View>

                  <View style= {styles.info}>
                      <Text style= {styles.name}> Jane Doe</Text>
                      <Text style= {styles.address}> Butwal, Nepal</Text>
                  </View>

              </View>
          </View>
          <View style={styles.middleLinks} >
              {this.navLink('Profile', 'profile')}
              {this.navLink('', 'Notification')}
              {this.navLink('MessageSell', 'Messages')}
              {this.navLink('PrivacyPolicy', 'Privacy Policy')}
              {this.navLink('ReportProblem', 'Report a Problem')}
              {this.navLink('LogOut', 'Log Out')}
          </View>
          <View style={styles.bottomLinks} >
            <Image source= {ad} style={{width: '100%'}}/>
          </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  topLinks: {
    height: 136,
    backgroundColor: '#262629',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleLinks: {
    flex: 1,
    backgroundColor: 'white',


  },
  picture: {
    width: 100,
  },
  image: {
    height: 88,
    width: 88,
    borderRadius: 44,

  },
  bottomLinks: {
    height: 170,
    backgroundColor: 'red'
  },
  link: {
    flex: 1,
    fontSize: 12,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left'
  },
  profile: {
  flex: 1,
  width: '95%',
  flexDirection: 'row',
  backgroundColor: '#262629',
  height: 88,
  justifyContent: 'center',
  alignItems: 'center'

  },
  info: {
    marginRight: 4
  },
  name: {
    fontSize: 18,
    color: '#fff',
    padding: 1
  },
  address: {
    fontSize: 12,
    color: '#8f939c',
    padding: 1
  }

});