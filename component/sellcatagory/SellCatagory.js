import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';


export default class SellCatagory extends React.Component {
constructor(){
  super();
    this.state= {
      isChecked: false
    }
}

  render(){
    return(
    <View>
      <TouchableOpacity
      onPress={()=>{
        this.setState({isChecked: true})
      }}> 
          <View  style= {styles.catagory}>
                <View style= {styles.icon}> 
                    <Image source= {{uri: this.props.iconUrl}} />
                </View>

                <View style= {{width: 250, justifyContent: 'center', }}> 
                    <Text style= {styles.text}> {this.props.catName} </Text> 
                </View>
                
                <View style= {styles.addTick}>
                  {(this.state.isChecked) ? 
                    <FontAwesome name="check" size= "25" color= "#d2232a" /> :
                    <MaterialCommunityIcons name="plus-circle" size= "25" color= "#8f939c" />}
                </View>
          </View>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  catagory: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
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
    height:72, 
    width:50, 
    marginRight: 21, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
  
});