import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import axios from 'axios';


import ad from '../assets/ad.png';
import profile from '../assets/15.png';
import product from '../assets/11.png';

import Catagory from '../component/home/Catagory';
import Grid from '../component/home/Grid';


export default class Home extends React.Component {

  render() {
    return (
        <ScrollView >
          <View style={styles.container}>
              <View style= {styles.ad1}>
                  <Image source= {ad} style= {{width: '100%', height: '100%'}}/>
              </View>
              <View style= {styles.catagory}>
                  <View style= {styles.explore}>
                      <View style= {{flex: 1}}>
                          <Text style= {styles.exploreText}> Explore</Text>
                      </View>
                      <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                          <View style= {{flex: 10, alignItems: 'flex-end', marginLeft: 5}}>
                            <TouchableOpacity 
                                onPress={()=> this.props.navigation.navigate('Catagory')}>
                                <Text style= {{fontSize: 10, color: '#8f939c', paddingLeft: 15}}> See All</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex: 1, marginRight: 12, alignItems: 'flex-start'}}>
                              <TouchableOpacity 
                                onPress={()=> this.props.navigation.navigate('Catagory')}>
                                <MaterialCommunityIcons name='chevron-right'  size= '15' style= {{color: '#8f939c', paddingTop: 3}} />
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>

                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                      <View style= {styles.firstCat}>
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 

                      </View>
                    </ScrollView>

                      <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                      <View style= {styles.secondCat}>
                          <Catagory brand="Auto Mobiles"/> 
                          <Catagory brand="Auto Mobiles"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                          <Catagory brand="Men's Fashion"/> 
                      </View>
                  </ScrollView>

              </View>
              <View style={styles.fresh}>
                  <Text style= {styles.freshText}> Fresh Finds</Text>
              </View>
              <View style= {styles.grid}>
                  
                  <Grid 
                  profileImage={profile}
                  productImage={product}
                  price="5000"
                  />

                  <View style={styles.gridBox}>
                      <Image source= {ad} style= {{width: null, height: 303, margin: 8}}/>
                  </View>

                  <Grid 
                profileImage={profile}
                  productImage={product}
                  price="5000"
                  />
                  <Grid 
                  profileImage={profile}
                  productImage={product}
                  price="5000"
                  />
                  <Grid 
                  profileImage={profile}
                  productImage={product}
                  price="5000"
                  />
                  <Grid 
                  profileImage={profile}
                  productImage={product}
                  price="5000"
                  />
              </View>
              {/* <View> */}
                <TouchableOpacity 
                style= {styles.sellPress}
                onPress={()=> this.props.navigation.navigate('Sell')}>
                    <View style= {{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <MaterialCommunityIcons name='plus'  size= '15' style= {{color: '#fff'}} />
                    </View> 
                    <View style= {{flex: 1.5, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style= {{fontSize: 12, color: '#fff'}}> Sell </Text>
                    </View>
                </TouchableOpacity>
              </View>
        </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ad1: {
    height: 200,
    width: '100%',
    backgroundColor: '#ddd',
    marginBottom: 8,

  },
  explore: {
    height: 37,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },

  catagory: {
    height: 256,
    borderBottomWidth: 8,
    borderColor: '#edf0f7'

  },
   exploreText: {
     fontSize: 14,
     color: '#515154',
     paddingLeft: 16
   },

   see: {
     fontSize: 10,
     color: '#8f939c',
     paddingRight: 31
   },
  
   fresh: {
     flex: 1,
     height: 48,
     alignItems: 'flex-start',
     justifyContent: 'center'
   },

   freshText: {
     fontSize: 14,
     color: '#4d4e53',
     paddingLeft: 16
   },

   firstCat: {
     height: 109.5,
     justifyContent: 'center',
     flexDirection: 'row'
   },

   secondCat: {
     height: 109.5,
     justifyContent: 'center',
     flexDirection: 'row'

  },

  box: {
    height: 80,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 19
  },
  con: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
      height: 16,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 6
  },
  textName: {
    fontSize: 10,
    color: '#4d4e53'
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  gridBox: {
    height: 319,
    width: '50%',
    borderColor: '#edf0f7',
    borderWidth: 0.5,

  },

  box1: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  box2: {
    height: 176,
  },
  box3: {
    justifyContent: 'center'
  },

  
  profileName: {
    fontSize: 10,
    color: '#4d4e53',
    paddingLeft: 8,
    paddingBottom: 1

  },

  box5: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'

  },

  like: {
    height: 24,
    width: 32,
    borderRadius: 12,
    backgroundColor: '#d2232a',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  sellPress: {
    position: 'absolute',
    marginLeft: 150,
    marginTop: 510,
    alignContent: 'center',
    flexDirection: 'row', 
    backgroundColor: '#d2232a',
    height: 40, 
    width: 80, 
    borderRadius: 45,
  },

})