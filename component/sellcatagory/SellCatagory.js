import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';


export default class SellCatagory extends React.Component {
  render(){
    return(
    <View style= {styles.catagory}> 
        <View style= {styles.icon}> 
            <Image source= {{uri: this.props.iconUrl}} style= {{size: 20}}/>
        </View>

        <View style= {{flex:4.5, justifyContent: 'center', }}> 
            <Text style= {styles.text}> {this.props.catName} </Text> 
        </View>
        
        <View style= {styles.addTick}> 
            <FontAwesome name="plus" size= "14" color= "#8f939c" paddingLeft= '18' paddingTop= '18'/> 
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  catagory: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eceff6',
    
  },

  icon: {
    width: 72, 
    height: 72,
    justifyContent: 'center', 
    marginLeft: 16, 
    marginTop: 8, 
    marginBottom: 14,  
    alignItems: 'center', 
    borderRadius: 28, 
    backgroundColor: '#f3f3f3', 
    width:56, 
    height: 56
  },

  text: {
    color: '#262629',
    fontSize: 14,
    paddingLeft: 16
  },

  addTick: {
    height:24, 
    width:24, 
    marginTop: 24, 
    marginRight: 21, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 12, 
    backgroundColor: '#f3f3f3', 
  }
  
});