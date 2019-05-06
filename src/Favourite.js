import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import ad from '../assets/store-ad.png';
import car from '../assets/11.png';
import profile1 from '../assets/12.png';
import profile2 from '../assets/13.png';
import food from '../assets/14.png';

export default class Home extends React.Component {

  render() {
    return (
      <ScrollView style= {styles.container}>

          <View style= {styles.likedBox}>
              <Text style= {styles.liked}> Stuffs you have liked </Text>
          </View>

          <View style= {styles.grid}>
              <View style= {styles.box}>
                  <View style= {styles.box1}> 
                      <View>
                          <Image source= {profile1} style= {{height: 24, width: 24, marginLeft: 8, borderRadius: 12}}/>
                      </View>
                      <View style= {{alignItems: 'center'}}>
                          <Text style= {styles.profileName}> John Doe</Text>
                      </View>
                  </View>

                  <View style= {styles.box2}>
                      <Image source= {car} style={{width: '90%', height: '90%', margin: 8}}/>
                  </View>

                  <View style= {styles.box3}>
                      <Text style= {{font: 11, color: '#262629', paddingRight: 4}}> Fusce auctor bibendum</Text>
                  </View>

                  <View style= {styles.box4}>
                      <View>
                          <Text style= {{font: 11, color: '#262629', paddingLeft: 4}}> Rs 5000000</Text>
                      </View>
                      <View style= {{flex: 1, alignItems: 'flex-end', marginRight: 8}}>
                          <View style= {styles.like}> 
                              <View>
                                  <MaterialCommunityIcons name= "heart" size= '15' color= "white"/>
                              </View>
                              <View>
                                  <Text style= {{color: 'white', fontSize: 8}}>4</Text>
                              </View>        
                          </View>
                      </View>
                  </View>
              </View>

              <View style= {styles.box}>
                  <View style= {styles.box1}> 
                      <View>
                          <Image source= {profile2} style= {{height: 24, width: 24, marginLeft: 8, borderRadius: 12}}/>
                      </View>
                      <View style= {{alignItems: 'center'}}>
                          <Text style= {styles.profileName}> Jone Doe</Text>
                      </View>
                  </View>

                  <View style= {styles.box2}>
                      <Image source= {food} style={{width: '90%', height: '90%', margin: 8}}/>
                  </View>

                  <View style= {styles.box3}>
                      <Text style= {{font: 11, color: '#262629', paddingRight: 4}}> Fusce auctor bibendum</Text>
                  </View>

                  <View style= {styles.box4}>
                      <View>
                          <Text style= {{font: 11, color: '#262629', paddingLeft: 4}}> Rs 5000000</Text>
                      </View>
                      <View style= {{flex: 1, alignItems: 'flex-end', marginRight: 8}}>
                          <View style= {styles.like}> 
                              <View>
                                  <MaterialCommunityIcons name= "heart" size= '15' color= "white"/>
                              </View>
                              <View>
                                  <Text style= {{color: 'white', fontSize: 8}}>4</Text>
                              </View>        
                          </View>
                      </View>
                  </View>
              </View>

              <View style= {styles.box}>
                  <View style= {styles.box1}> 
                      <View>
                          <Image source= {profile1} style= {{height: 24, width: 24, marginLeft: 8, borderRadius: 12}}/>
                      </View>
                      <View style= {{alignItems: 'center'}}>
                          <Text style= {styles.profileName}> John Doe</Text>
                      </View>
                  </View>

                  <View style= {styles.box2}>
                      <Image source= {car} style={{width: '90%', height: '90%', margin: 8}}/>
                  </View>

                  <View style= {styles.box3}>
                      <Text style= {{font: 11, color: '#262629', paddingRight: 4}}> Fusce auctor bibendum</Text>
                  </View>

                  <View style= {styles.box4}>
                      <View>
                          <Text style= {{font: 11, color: '#262629', paddingLeft: 4}}> Rs 5000000</Text>
                      </View>
                      <View style= {{flex: 1, alignItems: 'flex-end', marginRight: 8}}>
                          <View style= {styles.like}> 
                              <View>
                                  <MaterialCommunityIcons name= "heart" size= '15' color= "white"/>
                              </View>
                              <View>
                                  <Text style= {{color: 'white', fontSize: 8}}>4</Text>
                              </View>        
                          </View>
                      </View>
                  </View>
              </View>

              <View style= {styles.box}>
                  <Image source= {ad} style={{width: '100%', height: '100%'}}/>
              </View>
              
          </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },

  likedBox: {
  height: 48,
  paddingLeft: 16,
  backgroundColor: 'white',
  justifyContent: 'center'
  },

  liked: {
    fontSize: 14,
    color: '#515154'
  },

  grid: {
    height: 576,
    backgroundColor: '#edf0f7',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  box: {
    height: 261,
    width: '45.5%',
    backgroundColor: 'white',
    margin: 8

  },

  box1: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  
  box2: {
    height: 160,
  },
  box3: {
    alignItems: 'center'
  },

  box4: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'

  },

  profileName: {
    fontSize: 10,
    color: '#4d4e53',
    paddingLeft: 8

  },
  like: {
    height: 24,
    width: 32,
    borderRadius: 12,
    backgroundColor: '#d2232a',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});