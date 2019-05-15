import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';


export default class Catagory extends React.Component {

  render() {
    return (
    <View style= {styles.box}>
        <View style={styles.con}>
            <MaterialCommunityIcons name="car" size= "40" color="#d2232a" /> 
        </View>
        <View style= {styles.name}>
            <Text style= {styles.textName}>{this.props.brand} </Text>
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
});