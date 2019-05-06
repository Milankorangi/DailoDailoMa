import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';



export default class Grid extends React.Component {

  render() {
    return (
        <View style={styles.gridBox}>
            <View style= {styles.box1}> 
                <View style= {{width: 32}}>
                    <Image source= {this.props.profileImage} style= {{height: 24, width: 24, marginLeft: 8, borderRadius: 12}}/>
                </View>
                <View style= {{alignItems: 'center', width: 80}}>
                    <View>
                        <Text style= {styles.profileName}> John Doe</Text>
                    </View>
                    <View>
                        <Text style= {{color: '#8f939c', fontSize: 10}}> 1 day ago</Text>
                    </View>
                    
                </View>
                <View style = {{alignItems :'flex-end', justifyContent: 'center', flex: 1}}>
                    <MaterialCommunityIcons name='dots-horizontal'  size= '20' style= {{ color: '#8f939c', paddingRight: 16}} />
                </View> 
            </View>
            <View style= {styles.box2}>
                <Image source= {this.props.productImage} style={{width: '90%', height: '90%', margin: 8}}/>
            </View>
            <View style= {styles.box3}>
                <Text style= {{font: 12, color: '#262629', paddingRight: 4}}> Fusce auctor bibendum</Text>
            </View>
            <View style= {styles.box3}>
                <Text style= {{font: 9, color: '#8f939c', paddingLeft: 4}}> Nulla facilisi. Morbi facilisis malesuada turpis, sed malesuada ipsum.</Text>
            </View>
            <View style= {styles.box5}>
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
    );

  }
}

const styles = StyleSheet.create({
    gridBox: {
        height: 332,
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
        paddingLeft: 2,
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
      }
    


});