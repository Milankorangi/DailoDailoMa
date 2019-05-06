import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';

import mainProfile from '../assets/22.png';
import profile from '../assets/15.png';
import product from '../assets/11.png';

import Grid from '../component/home/Grid';


export default class Profile extends React.Component {
    static navigationOptions = {
        headerTitle: 'Profile',
        headerTitleStyle: {
          color: '#fff'
        },
        headerStyle: {
          backgroundColor: 'red'
        },
        headerLeft: (
          <TouchableOpacity 
                onPress={()=> this.props.navigation.goBack()}>
                <MaterialCommunityIcons name='arrow-left'  size= '25' style= {{paddingLeft: 16, color: '#fff' }} />
          </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity 
                  onPress={()=> this.props.navigation.goBack()}>
                  <Text style= {{color: "#fff", fontSize: 12, paddingRight: 16}}>Edit</Text>
            </TouchableOpacity>
          ),
      }


  render() {
    return (
    <ScrollView style= {styles.container}>
        <View style= {styles.profile}>
            <View style= {{height: 120, flexDirection: 'row'}}>
                <View style= {{height: 95, width: 95, borderRadius: 47.5, margin:17}}>
                    <Image source= {mainProfile} />
                </View>
                <View style= {{justifyContent: 'center'}}>
                    <View>
                        <Text style= {{fontSize:18, color: '#262629'}}>Jane Doe</Text>
                    </View>
                    <View>
                        <Text style= {{fontSize:12, color: '#8f939c'}}>Butwal, Nepal</Text>
                    </View>
                </View>
            </View>
            <View style= {{height: 80, flexDirection: 'row'}}>
                <View style= {{flex:1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderColor: '#edf0f7'}}>
                    <View>
                        <Text style= {styles.deal}> 3</Text>
                    </View>
                    <View>
                        <Text style= {styles.deal}>Listing</Text>
                    </View>
                </View>
                <View style= {{flex:1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#edf0f7'}}>
                    <View>
                        <Text style= {styles.deal}> 3</Text>
                    </View>
                    <View>
                        <Text style= {styles.deal}>Sold</Text>
                    </View>
                </View>
                <View style= {{flex:1, alignItems: 'center', justifyContent: 'center', borderLeftWidth: 1, borderColor: '#edf0f7'}}>
                    <View>
                        <Text style= {styles.deal}> Offer</Text>
                    </View>
                    <View>
                        <Text style= {styles.deal}>Made</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style= {{height: 32}}>
            <Text style= {{color: '#8f939c', fontSize: 12, paddingLeft: 16}}> Listings</Text>
        </View>

        <View style= {styles.grid}>
                
                <Grid 
                profileImage={profile}
                productImage={product}
                />

                <Grid 
              profileImage={profile}
                productImage={product}
                />

                <Grid 
              profileImage={profile}
                productImage={product}
                />
                <Grid 
                profileImage={profile}
                productImage={product}
                />
                <Grid 
                profileImage={profile}
                productImage={product}
                />
                <Grid 
                profileImage={profile}
                productImage={product}
                />
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

    profile: {
        height: 200,
        width: 400,
    },

  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  
  deal: {
      fontSize: 12,
      color: '#262629'
  }
});