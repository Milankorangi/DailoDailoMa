import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';



export default class Description extends React.Component {
  render(){
    return(
      <View style= {styles.container}>
          <View style= {styles.header}>
                <View style= {styles.first}>
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.goBack()}>
                    <MaterialCommunityIcons name='arrow-left'  size= '25' style= {{color: '#fff' }} />
                </TouchableOpacity>
                </View>
                <View style= {styles.second}>
                    <Text style= {{fontSize: 18, color: '#fff'}}> Add Description </Text>   
                </View>
                
                <View style= {styles.third}>
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('ContactInformation')}>
                    <Text style= {{fontSize: 12, color: '#fff', justifyContent: 'flex-end', paddingRight: 10}}> Next</Text>
                </TouchableOpacity>
                </View>

          </View>

          <View style= {styles.listingname}>     
                <Text style= {styles.heading}>
                  LISTING NAME
                </Text>
                <View style= {{marginLeft: '5%', marginRight: '5%', flex: 1.1}}>
                  <TextInput 
                    style= {styles.input}
                    placeholder= 'Adidas T-Shirt'
                    underlineColorAndroid= '#d2232a'
                    borderBottomColor= '#d2232a'
                    borderLeftColor= 'white'
                    borderRightColor= 'white'
                    borderTopColor= 'white'
                    borderWidth= '1.5'
                    returnKeyType= 'next' 
                    onSubmitEditing= {()=> this.passwordInput.focus()}
                    autoCorrect= {false}/>
                </View>
          </View>
          <View style = {styles.size}> 
              <View style= {{flex: 1}}> 
                  <Text style= {styles.heading}> SIZE </Text>
              </View>
              <View style= {{flex: 1.2}}> 
                  <Text style= {styles.type}> Clothing Type </Text>
              </View>
              <View style= {{flex: 1.2}}> 
                  <Text style= {styles.type}> Size </Text>
              </View>
              </View>

          <View style= {styles.brandandprice}> 
             <View style= {{flex: 1}}> 
                <Text style= {styles.heading}> BRAND AND PRICE </Text>
             </View>
             <View style= {styles.brand}>     
                  <Text style= {styles.text}>
                     Brand
                  </Text>
                  <View style= {{marginLeft: '5%', marginRight: '5%'}}>
                    <TextInput 
                      style= {styles.input}
                      placeholder= 'Adidas'
                      underlineColorAndroid= '#d2232a'
                      borderBottomColor= '#d2232a'
                      borderLeftColor= 'white'
                      borderRightColor= 'white'
                      borderTopColor= 'white'
                      borderWidth= '1.5'
                      returnKeyType= 'next' 
                      onSubmitEditing= {()=> this.passwordInput.focus()}
                      autoCorrect= {false}/>
                    </View>
             </View>
             <View style= {styles.price}>     
                  <Text style= {styles.text}>
                    Price
                  </Text>
                  <View style= {{marginLeft: '5%', marginRight: '5%'}}>
                    <TextInput 
                      style= {styles.input}
                      placeholder= 'NRP 1500'
                      underlineColorAndroid= '#d2232a'
                      borderBottomColor= '#d2232a'
                      borderLeftColor= 'white'
                      borderRightColor= 'white'
                      borderTopColor= 'white'
                      borderWidth= '1.5'
                      returnKeyType= 'next' 
                      onSubmitEditing= {()=> this.passwordInput.focus()}
                      autoCorrect= {false}/>
                    </View>
              </View>
          </View>

          <View style= {styles.itemcondition}> 
              <View style = {{flex: 1, justifyContent: 'center'}}>
                  <Text style= {styles.heading}> ITEM CONDITION</Text>
              </View>
              <View style = {styles.item}>
                  <Text style= {styles.condition}>New</Text>
              </View>
              <View style = {styles.item}> 
                  <Text style= {styles.condition}> Used</Text>
              </View>
              <View style = {styles.item}>
                  <Text style= {styles.condition}> Old</Text>
              </View>
          </View>

          <View style= {styles.description}> 
              <View style={{flex: 1}}> 
                  <Text style= {styles.heading}> DESCRIPTION</Text>
              </View>
            
              <View style= {styles.descriptionInput}>     
                  <Text style= {styles.text}>
                  Give a short description about the item you want to sell
                  </Text>
                  <View style= {{marginLeft: '4%', marginRight: '5%'}}>
                    <TextInput 
                      style= {styles.input}
                      placeholder= 'lorem'
                      multiline= {true}
                      numberOfLinew= {4}
                      underlineColorAndroid= '#d2232a'
                      borderBottomColor= '#d2232a'
                      borderLeftColor= 'white'
                      borderRightColor= 'white'
                      borderTopColor= 'white'
                      borderWidth= '1.5'
                      returnKeyType= 'next' 
                      onSubmitEditing= {()=> this.passwordInput.focus()}
                      autoCorrect= {false}/>
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

  header: {
    height: 56,
    backgroundColor: '#d2232a',
    flexDirection: 'row',
    alignItems: 'center',

  },

  first: {
      width: 50,
      marginLeft: 16,
      marginTop: 20

  },

  second: {
      width: 230,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center'

  },

  third: {
      width: 70,
      marginTop: 20,
      alignItems: 'flex-end',
      marginRight: 16
  },


listingname: {
  flex: 1
  

},
size: {
  flex:1.55

},
brandandprice: {
  flex: 2.1

},
itemcondition:{
  flex: 2

},
description:{
  flex: 2

},
descriptionInput: {
  flex: 3.4
},
heading: {
  backgroundColor: '#edf0f7',
  fontSize: 12,
  color: '#8f939c',
  padding: 16,
  justifyContent: 'center'

},
input: {
  fontSize: 14,
  color: '#4d4e53',

},
condition: {
  fontSize: 14,
  color: '#4d4e53',
  paddingLeft: 16
},
text: {
  color:'#8f939c',
  fontSize: 10,
  paddingLeft: 16

},
brand: {
  flex:1.5
},
price: {
  flex: 1.5
},
item: {
  flex: 1.2
},
type: {
  fontSize: 14,
  color: '#4d4e53',
  paddingLeft: 16
}


});