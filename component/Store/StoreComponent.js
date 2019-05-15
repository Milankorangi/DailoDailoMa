import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';



export default class StoreComponent extends React.Component {

  render() {
    return (
    <View>
        <View style= {styles.salePicture}>
            <Image source= {this.props.picture} style= {{width: '100%', height: '100%', borderRadius: 2}}/>
        </View>

          <View style= {{flexDirection: 'row'}}>
              <View style= {{width: 46, margin: 8, marginTop: 0, height: 64}}>
                  <Image source= {this.props.profileimage} style= {{width: '100%', height: '100%'}}/>
              </View>
              <View>
                <View style= {{height: 18, justifyContent: 'center'}}>
                    <Text style= {styles.cato}> {this.props.brand} </Text>
                </View>
                <View style= {{justifyContent: 'center', flexWrap: 'wrap', width: 112}}>
                    <Text styles= {styles.catoName}>{this.props.storeName} </Text>
                </View> 
              </View>
          </View>
    </View>
    );

  }
}

const styles = StyleSheet.create({
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