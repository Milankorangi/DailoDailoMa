import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';

export default class StoreComponent extends React.Component {

  render() {
    return (
            <View style= {styles.box}>
                  <View style= {styles.box1}>
                      <Image source= {this.props.first} style={{width: '90%', height: '90%', margin: 8}}/>
                  </View>

                  <View style= {styles.box2}>
                      <Text style= {{font: 12, color: '#262629', paddingLeft: 8}}> {this.props.details} </Text>
                  </View>

                  <View style= {styles.box3}>
                      <View>
                          <Text style= {{font: 11, color: '#262629', paddingLeft: 16}}> {this.props.price}</Text>
                      </View>
                      <View style= {{flex: 1, alignItems: 'flex-end', marginRight: 8}}>
                          <View style= {styles.like1}> 
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
    );

  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },

      
  box: {
    height: 270,
    width: '50%',
    borderWidth: 0.5,
    borderColor: '#edf0f7',
  },
  
  box1: {
    height: 176
  },
  box2: {
    alignItems: 'center',
    height: 48
  },
  box3: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'

  },
  like1: {
    height: 24,
    width: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b9c1ce',
    backgroundColor: '#d2232a',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  
  },

});