import React from 'react';
import {ScrollView, StyleSheet, View, Text,Image, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import cover from '../assets/store.png';
import ad from '../assets/store-ad.png';
import first from '../assets/store2.png';
import second from '../assets/store3.png';
import third from '../assets/store4.png';

import profile1 from '../assets/store-tag.png';
import profile2 from '../assets/store-tag-2.png';
import profile3 from '../assets/store4-tag.png';


export default class Store extends React.Component {

  render() {
    return (
        <ScrollView style={styles.container}>
           <View style= {styles.cover}>
              <Image source= {cover} style= {styles.coverPicture}/>
           </View> 

           <View style= {styles.stores}>
              <View style= {{flex: 1, justifyContent: 'center'}}>
                  <Text style= {{fontSize: 14, color: '#515154', paddingLeft: 16}}> Stores</Text>                
              </View>
              <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <View style= {{flex: 10, alignItems: 'flex-end', marginLeft: 5}}>
                          <TouchableOpacity 
                              onPress={()=> this.props.navigation.navigate('Catagory')}>
                              <Text style= {{fontSize: 10, color: '#8f939c', paddingLeft: 20}}> See Catagories </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, marginRight: 12, alignItems: 'flex-start'}}>
                            <TouchableOpacity 
                              onPress={()=> this.props.navigation.navigate('Catagory')}>
                              <MaterialCommunityIcons name='chevron-right'  size= '15' style= {{color: '#8f939c', paddingTop: 3, paddingRight: 15}} />
                            </TouchableOpacity>
                        </View>
                  </View>
           </View>

           <View style= {styles.grid}>
              <View style= {styles.box}> 
                  <View style= {styles.salePicture}>
                      <Image source= {first} style= {{width: '100%', height: '100%', borderRadius: 2}}/>
                  </View>

                  <View style= {{flexDirection: 'row'}}>
                      <View style= {{width: 46, margin: 8, marginTop: 0, height: 64}}>
                          <Image source= {profile1} style= {{width: '100%', height: '100%'}}/>
                      </View>
                      <View>
                        <View style= {{height: 18, justifyContent: 'center'}}>
                            <Text style= {styles.cato}> Clothing </Text>
                        </View>
                        <View style= {{justifyContent: 'center', flexWrap: 'wrap', width: 112}}>
                            <Text styles= {styles.catoName}> Annapurna Clothing Store </Text>
                        </View> 
                      </View>
                  </View>
              </View>

              <View style= {styles.box}> 
                  <View style= {styles.salePicture}>
                      <Image source= {second} style= {{width: '100%', height: '100%', borderRadius: 2}}/>
                  </View>

                  <View style= {{flexDirection: 'row'}}>
                      <View style= {{width: 46, margin: 8, marginTop: 0, height: 64}}>
                          <Image source= {profile2} style= {{width: '100%', height: '100%'}}/>
                      </View>
                      <View>
                        <View style= {{height: 18, justifyContent: 'center'}}>
                            <Text style= {styles.cato}> Clothing </Text>
                        </View>
                        <View style= {{justifyContent: 'center', flexWrap: 'wrap', width: 112}}>
                            <Text styles= {styles.catoName}> New Tandoori Fast Food Restaurant</Text>
                        </View> 
                      </View>
                  </View>
              </View>

              <View style= {styles.box}> 
                  <View style= {styles.salePicture}>
                      <Image source= {third} style= {{width: '100%', height: '100%', borderRadius: 2}}/>
                  </View>

                  <View style= {{flexDirection: 'row'}}>
                      <View style= {{width: 46, margin: 8, marginTop: 0, height: 64}}>
                          <Image source= {profile3} style= {{width: '100%', height: '100%'}}/>
                      </View>
                      <View>
                        <View style= {{height: 18, justifyContent: 'center'}}>
                            <Text style= {styles.cato}> Clothing </Text>
                        </View>
                        <View style= {{justifyContent: 'center', flexWrap: 'wrap', width: 112}}>
                            <Text styles= {styles.catoName}> Annapurna Sweets & Fast Food Restaurant 
                            </Text>
                        </View> 
                      </View>
                  </View>
              </View>

              <View style= {styles.box}> 
                  <Image source= {ad} style= {{width: '100%', height: '100%'}}/>
              </View>
           </View>
        </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
  },

  cover:{
    height: 200,
  },
  coverPicture: {
    height: '100%',
    width: '100%'
   },

   stores: {
    height: 56,
    backgroundColor: '#fff',
    flexDirection: 'row',
   },

   grid: {
    flex:1,
    backgroundColor: '#edf0f7',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
   },

   box: {
     height: 248,
     width: '45.5%',
     backgroundColor: '#fff',
     margin: 8
   },
   salePicture: {
     height: 160,
     margin: 8
   },

   cato: {
    fontSize: 12,
    color: '#8f939c'
   },

   catoName: {
    fontSize: 12,
    color: '#4d4e53'
   }



});