import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import StoreDetailsComponent from '../component/Store/StoreDetailsComponent';

import profilePicture from '../assets/store-detail.png';
import first from '../assets/1s.png';
import second from '../assets/2.png';
import third from '../assets/3.png';
import fourth from '../assets/4.png';



export default class App extends React.Component {
  static navigationOptions = {
    header: null
  }

  render(){
     return(
       <ScrollView style= {styles.container}>
          <View style= {styles.header}>
                  <View style= {styles.first}>
                  <TouchableOpacity 
                      onPress={()=> this.props.navigation.goBack()}>
                      <MaterialCommunityIcons name='arrow-left'  size= '30' style= {{color: '#fff' }} />
                  </TouchableOpacity>
                  </View>
                  <View style= {styles.second}>
                      <TextInput 
                        style={styles.search} 
                        placeholder= 'Search in Store'
                        borderColor= '#d2232a'
                        borderWidth= '1'
                        returnKeyType= 'next' 
                        onSubmitEditing= {()=> this.passwordInput.focus()}
                        autoCorrect= {false}/>
                  </View>
          </View>

          <View style= {styles.profilePicture}>
              <Image source= {profilePicture} style= {{height: '100%', width: '100%' }}/>
          </View>

               <View style= {styles.details}>
                    <View style= {{justifyContent: 'center'}}> 
                      <Text style= {{fontSize: 18, color: '#262629', paddingLeft: 16, paddingTop: 16}}> Annapurna Clothing Store</Text>
                    </View>
                    <View style= {{flexDirection: 'row', alignItems: 'center', marginLeft: 16, marginTop: 4}}>
                        <View>
                            <MaterialCommunityIcons name= "map-marker" size='16' />
                        </View>
                        <View>
                            <Text style={{paddingLeft: 15, fontSize: 12, color: '#33a0e8'}}>Durbarmarg, Kathmandu</Text>
                        </View>
                    </View>
                    <View style= {{flexDirection: 'row', alignItems: 'center', marginLeft: 16, marginTop: 5}}>
                        <View>
                            <MaterialCommunityIcons name='clock-outline' size='16' />
                        </View>
                        <View>
                            <Text style={{paddingLeft: 15, fontSize: 12, color: '#8f939c'}}> 10am to 6pm</Text>
                        </View>
                    </View>
                    <View style= {{flexDirection: 'row', alignItems: 'center',marginLeft: 16, marginBottom: 12, marginTop: 5}}>
                        <View>
                            <MaterialCommunityIcons name='book-open' size='16' />
                        </View>
                        <View style= {{flexWrap: 'wrap'}}>
                            <Text style={{paddingLeft: 15, fontSize: 12, color: ''}}> Annapurna Clothing Store is online clothing brand in Kathmandu located at Durbarmarg. All branded fashion items are found here</Text>
                        </View>
                    </View>
                </View>

          <View style= {styles.catagories}>
              <View style= {{flex: 1, justifyContent: 'center'}}>
                <Text  style= {{color: '#8f939c', fontSize: 12, paddingLeft: 16}}> Catagories: All</Text>
              </View>
              <View style= {{flex: 1, alignItems: 'flex-end', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', marginRight: 13}}>
                    <View>
                        <Text style= {{color: '#262629', fontSize: 12}}> Filter</Text>
                    </View>
                    <View>
                         <MaterialCommunityIcons name='menu-down' size='16' />      
                    </View>     
              </View>
          </View>

          <View style= {styles.grid}>

              <StoreDetailsComponent
               first= "first"
               details= "Integer consectetur non lectus feugia"
               price= "500"/>

               <StoreDetailsComponent
               first= "first"
               details= "Integer consectetur non lectus feugia"
               price= "500"/>

               <StoreDetailsComponent
               first= "first"
               details= "Integer consectetur non lectus feugia"
               price= "500"/>

               <StoreDetailsComponent
               first= "first"
               details= "Integer consectetur non lectus feugia"
               price= "500"/>
                  
          </View>

       </ScrollView>
     );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 80,
    backgroundColor: '#d2232a',
    flexDirection: 'row',
    alignItems: 'center',

  },

  first: {
      width: 40,
      marginLeft: 16,
      marginTop: 20

  },
  second: {
    width: 300,
    marginTop: 10

  },

  search: {
    backgroundColor: '#fff',
    height: 45,
    width: 300,
    borderRadius: 4,
    color: '#8f939c',
    fontSize: 12,
    padding: 10,
    paddingLeft: 15,
    marginTop: 10,
    alignItems: 'center',

},

  profilePicture: {
    height: 160,
    width: '100%',

  },

  details: {
    height: 140,
    width: '100%',
    backgroundColor: '#fff'
  },

  catagories: {
    height: 48,
    backgroundColor: '#edf0f7',
    flexDirection: 'row',
    justifyContent:'center'
  },

  grid: {
    height: 576,
    flexDirection: 'row',
    flexWrap: 'wrap'
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

  like: {
    height: 24,
    width: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b9c1ce',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }


});
