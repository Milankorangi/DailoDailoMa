import React from 'react';
import {ScrollView, StyleSheet, View, Text,Image, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import StoreDetailsComponent from '../component/Store/StoreComponent';

import cover from '../assets/store.png';
import ad from '../assets/store-ad.png';
import first from '../assets/store2.png';
import second from '../assets/store3.png';
import third from '../assets/store4.png';

import profile1 from '../assets/store-tag.png';
import profile2 from '../assets/store-tag-2.png';
import profile3 from '../assets/store4-tag.png';
import StoreComponent from '../component/Store/StoreComponent';


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
                <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('StoreDetails')}>
                  <StoreComponent
                  picture= {first}
                  profileimage= {profile1}
                  brand= "Clothing"
                  storeName= "Annapurna Clothing Store" />
                </TouchableOpacity >
              </View>

              <View style= {styles.box}> 
                <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('StoreDetails')}>
                  <StoreComponent
                  picture= {second}
                  profileimage= {profile2}
                  brand= "Restaurant"
                  storeName= "New Tandoori Fast Food and Restaurant" />
                </TouchableOpacity >
              </View>

              <View style= {styles.box}> 
                <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('StoreDetails')}>
                  <StoreComponent
                  picture= {third}
                  profileimage= {profile3}
                  brand= "{Restaurant}"
                  storeName= "Annapurna Clothing Store" />
                </TouchableOpacity >
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





});