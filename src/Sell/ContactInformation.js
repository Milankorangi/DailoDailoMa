import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput
} from 'react-native';

import ToggleSwtich from 'toggle-switch-react-native';


export default class HomeScreen extends React.Component {
 
  render() {
    return (
      <View style= {styles.container}>
        <View style= {styles.top}>
          <View style= {{flex: 3}}> 
              <View style= {styles.black}> 
                <Text>Contact Number</Text>
              </View>
              <View style= {{flex: 2, backgroundColor: 'white', paddingLeft: 16,
               fontSize: 12, justifyContent: 'center'}}>     
                  <Text style= {{color: '#4d4e53', paddingBottom: 10}}>
                    Mobile Number
                  </Text>
                  <TextInput 
                  style= {styles.input}
                  placeholder= '9804355990'
                  underlineColorAndroid= '#d2232a'
                  borderBottomColor= '#d2232a'
                  borderLeftColor= 'white'
                  borderRightColor= 'white'
                  borderTopColor= 'white'
                  borderWidth= '1.5'
                  onSubmitEditing= {()=> this.passwordInput.focus()}
                  autoCorrect= {false}/>
              </View>
          </View>

          <View style= {{flex: 3}}> 
              <View style= {styles.black}>
                <Text > Meet Up or Delivery</Text> 
              </View>
              
              <View style= {{flex: 1, backgroundColor: 'white', paddingLeft: 16, flexDirection: 'row',
              fontSize: 12, justifyContent: 'center', borderBottomColor: '#edf0f7', borderBottomWidth: '1'}}> 
                
                  <View style= {{flex: 1, justifyContent: 'center',}}>
                      <Text style= {styles.text}> Meet Up</Text>
                  </View>

                  <View style={{alignItems: 'flex-end', justifyContent: 'center', flex: 1, paddingRight: 16}}>
                    <ToggleSwtich
                      isOn={false}
                      onColor= '#33a0e8'
                      offColor= '#e3e3e3'
                      width= '15'
                      />
                  </View>


              </View>
              
              <View  style= {{flex: 1, backgroundColor: 'white', paddingLeft: 16, flexDirection: 'row', 
              fontSize: 12, borderTopColor: '#edf0f7', borderTopWidth: '1'}}> 
                
                <View style= {{flex: 1, justifyContent: 'center',}}>
                    <Text style= {styles.text}> Delivery</Text>
                </View>

                <View style={{alignItems: 'flex-end', justifyContent: 'center', flex: 1, paddingRight: 16}}>
                  <ToggleSwtich
                    isOn={true}
                    onColor= '#33a0e8'
                    offColor= '#e3e3e3'
                    />
                </View>
              </View>
            </View>

          <View style={{ flex: 2.8}}> 
              <View style= {styles.black}> 
                <Text> Location </Text>
              </View>
              <View  style= {{flex: 2, backgroundColor: 'white', paddingLeft: 16, 
              fontSize: 12, justifyContent: 'center'}}> 
                <Text style= {styles.text}> Add Location for meet up </Text>
              </View>
          </View>
        
        </View>


          <View style= {styles.down}>

          </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf0f7'

  },
  top: {
    flex: 1.125,
  },
  down: {
    flex: 1
  },
  black: {
    flex:1,
    fontSize: 12,
    paddingLeft: 16,
    justifyContent: 'center',
    color: '#8f939c'
  
  },
  text: {
    color: '#4d4e53',
    paddingTop: 0
  },
  input: {
    marginRight: 16,
    paddingBottom: 10
  },

  


});