import React from 'react';
import CheckBox from 'react-native-check-box';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';

export default class Description extends React.Component {
  constructor(){
    super();
    this.state = {
      isChecked: true
    }
  }
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
          <ScrollView
          showsVerticalScrollIndicator={false}
          >
              <View style= {styles.listingname}>     
                    <Text style= {styles.heading}>
                      Listing Name
                    </Text>
                    <View style= {{height: 48, marginLeft: '5%', marginRight: '5%', justifyContent: 'center'}}>
                      <TextInput 
                        style= {styles.input}
                        placeholder= 'Adidas T-Shirt'
                        underlineColorAndroid= '#d2232a'
                        borderBottomColor= '#d2232a'
                        borderBottomWidth= '1'
                        autoCorrect= {false}/>
                    </View>
              </View>

              <View style = {styles.size}> 
                  <View style= {{height: 40, justifyContent: 'center'}}> 
                      <Text style= {styles.heading}> SIZE </Text>
                  </View>
                  <View style= {{height: 48, justifyContent: 'center', 
                  borderColor: '#edf0f7', borderBottomWidth:'0.5'}}> 
                      <Text style= {styles.type}> Clothing Type </Text>
                  </View>
                  <View style= {{height: 47, justifyContent: 'center',
                borderColor: '#edf0f7', borderTopWidth: 0.5}}> 
                      <Text style= {styles.type}> Size </Text>
                  </View>
              </View>

              <View style= {styles.brandandprice}> 
                  <View style= {{height: 40, justifyContent: 'center'}}> 
                      <Text style= {styles.heading}> BRAND AND PRICE </Text>
                  </View>
                  <View style= {styles.brand}>     
                        <Text style= {styles.bp}>
                          Brand
                        </Text>
                        <View style= {{marginLeft: '5%', marginRight: '5%'}}>
                          <TextInput 
                            style= {styles.input}
                            placeholder= 'Adidas'
                            underlineColorAndroid= '#d2232a'
                            borderBottomColor= '#d2232a'
                            borderBottomWidth= '1'
                            autoCorrect= {false}/>
                          </View>
                  </View>
                  <View style= {styles.price}>     
                        <Text style= {styles.bp}>
                          Price
                        </Text>
                        <View style= {{marginLeft: '5%', marginRight: '5%'}}>
                          <TextInput 
                            style= {styles.input}
                            placeholder= 'NRP 1500'
                            underlineColorAndroid= '#d2232a'
                            borderBottomColor= '#d2232a'
                            borderBottomWidth= '1'
                            autoCorrect= {false}/>
                          </View>
                  </View>
              </View>

              <View style= {styles.itemcondition}> 
                  <View style = {{flex: 1, justifyContent: 'center'}}>
                      <Text style= {styles.heading}> ITEM CONDITION</Text>
                  </View>
                  <View style = {styles.itemNew}>
                      <View style={{flex: 1, justifyContent: 'center'}} >
                          <Text style= {styles.condition}>New</Text>
                      </View>
                      <View style={{justifyContent: 'center', alignItems: 'flex-end', paddingRight: 16}} >
                          <CheckBox 
                          checkedImage={<MaterialCommunityIcons name="circle-slice-8" size='20' style={{color:'#33a0e8'}}/>}
                          unCheckedImage={<MaterialCommunityIcons name='circle-outline' size='20' style={{color: '#8f939c'}}/>}
                          onClick = {() => {
                            this.setState({isChecked: !this.state.isChecked})
                          }}
                          isChecked= {this.state.isChecked}/>
                      </View>
                  </View>
                  <View style = {styles.item}> 
                      <View style={{flex: 1, justifyContent: 'center'}} >
                          <Text style= {styles.condition}> Used </Text>
                      </View>
                      <View style={{justifyContent: 'center', alignItems: 'flex-end', paddingRight: 16}} >
                          <CheckBox 
                          checkedImage={<MaterialCommunityIcons name="circle-slice-8" size='20' style={{color:'#33a0e8'}}/>}
                          unCheckedImage={<MaterialCommunityIcons name='circle-outline' size='20' style={{color: '#8f939c'}}/>}
                          onClick = {() => {
                            this.setState({isChecked: !this.state.isChecked})
                          }}
                          isChecked= {!this.state.isChecked}/>
                      </View>
                  </View>
                  <View style = {styles.item}>
                      <View style={{flex: 1,justifyContent: 'center'}} >
                          <Text style= {styles.condition}> Old </Text>
                      </View>
                      <View style={{justifyContent: 'center', paddingRight: 16}} >
                          <CheckBox 
                          checkedImage={<MaterialCommunityIcons name="circle-slice-8" size='20' style={{color:'#33a0e8'}}/>}
                          unCheckedImage={<MaterialCommunityIcons name='circle-outline' size='20' style={{color: '#8f939c'}} />}             
                          style= {{alignItems: "flex-end"}}
                          onClick = {() => {
                            this.setState({isChecked: !this.state.isChecked})
                          }}
                          isChecked= {!this.state.isChecked}/>
                      </View>
                  </View>
              </View>

              <View style= {styles.description}> 
                  <View style={{height: 40 }}> 
                      <Text style= {styles.heading}> DESCRIPTION</Text>
                  </View>
                
                  <View style= {styles.descriptionInput}>
                      <View style= {styles.textDes}>     
                          <Text style= {styles.textDescription}>
                            Give a short description about the item you want to sell
                          </Text>
                      </View>
                      <View style= {{ justifyContent: 'center', marginLeft: '4%', marginRight: '5%', height: 86}}>
                        <TextInput 
                          style= {styles.input}
                          placeholder= 'Description about Item you want to sell'
                          multiline= {true}
                          numberOfLinew= {4}
                          underlineColorAndroid= '#d2232a'
                          borderBottomColor= '#d2232a'
                          borderBottomWidth= '1'
                          autoCorrect= {false}/>
                        </View>
                  </View>
              </View>
          </ScrollView>
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
  height: 88
  
},
size: {
  height: 136

},
brandandprice: {
  height: 188,

},
itemcondition:{
  height:188,
},

description:{
  height: 156

},
descriptionInput: {
  flex: 3.4
},
heading: {
  height: 40,
  backgroundColor: '#edf0f7',
  fontSize: 12,
  color: '#8f939c',
  padding: 16,
  justifyContent: 'center'
},

input: {
  fontSize: 14,
  paddingBottom: 9,
  color: '#4d4e53',
},

condition: {
  fontSize: 14,
  color: '#4d4e53',
  paddingLeft: 16
},

bp: {
  color:'#8f939c',
  fontSize: 10,
  paddingLeft: 20,
  paddingBottom: 11
},

brand: {
  height: 72,
  justifyContent: 'center',
},

price: {
  height: 72,
  justifyContent: 'center'
},

item: {
  height: 48,
  borderColor: '#edf0f7',
  borderWidth: 0.5,
  flexDirection: 'row'
},

itemNew: {
  height: 48,
  borderColor: '#edf0f7',
  borderBottomWidth: 0.5,
  flexDirection: 'row'
},

type: {
  fontSize: 14,
  color: '#4d4e53',
  paddingLeft: 16
},

textDes: {
  height: 30,
},

textDescription: {
  color: '#8f939c',
  fontSize: 10,
  paddingLeft: 16,
  paddingTop: 13,
  paddingBottom: 6.5

}
});