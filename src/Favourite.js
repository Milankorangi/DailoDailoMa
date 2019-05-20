import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import FavGrid from '../component/favourite/FavGrid';

import ad from '../assets/store-ad.png';
import car from '../assets/11.png';
import profile1 from '../assets/12.png';
import profile2 from '../assets/13.png';
import food from '../assets/14.png';

export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
          like : false,
          count : 0
        }
      }
    
      ifLiked = () => {
        if (this.state.like == true){
          this.setState({
            like: false,
            count : this.state.count - 1
          })
        }
        else{
          this.setState({
            like: true,
            count : this.state.count + 1
          })
        }
      }

  render() {
    return (
      <ScrollView style= {styles.container}>

          <View style= {styles.likedBox}>
              <Text style= {styles.allLiked}> Stuffs you have liked </Text>
          </View>

          <View style= {styles.grid}>
              <FavGrid 
              profile = {profile1}
              profileName = "John Doe"
              image = {car}
              description = "Fusce Podamileb autor bibhendum"
              price = "4000"/>

              <FavGrid 
              profile = {profile2}
              profileName = "John Doe"
              image = {food}
              description = "Fusce autor bibhendum"
              price = "5000"/>

              <FavGrid 
              profile = {profile1}
              profileName = "Jane Doe"
              image = {car}
              description = "Fusce autor bibhendum"
              price = "2000"/>
              
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

  allLiked: {
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
  liked: {
    height: 24,
    width: 32,
    borderRadius: 12,
    backgroundColor: '#d2232a',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  unLiked: {
    height: 24,
    width: 32,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderColor: '#8f939c',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});