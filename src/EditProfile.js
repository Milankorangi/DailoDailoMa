import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import pimage from '../assets/3.png';


export default class EditProfile extends React.Component {
  render() {
    return(
        <View style= {styles.all}>
            <View style= {styles.header}>
                <View style= {styles.first}>
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('Profile')}>
                    <MaterialCommunityIcons name='arrow-left'  size= '25' style= {{color: '#fff' }} />
                </TouchableOpacity>
                </View>
                <View style= {styles.second}>
                    <Text style= {{fontSize: 18, color: '#fff'}}> Edit Profile</Text>   
                </View>
            </View>

            <View style= {styles.container}>
                <View style= { styles.picname}>
                    <View style= {styles.pic}>  
                        <View style= {styles.picture}>
                            <Image source={pimage} style= {{height: '100%', width: '100%'}}/>
                        </View>
                        
                        <View style= {styles.picturename}> 
                            <Text style={{color: 'white'}}> Change Picture </Text>
                        </View>

                    </View>
                    <View style= {styles.name}>
                        <View style= {styles.full}>    
                            <Text style= {{paddingBottom: 10, color: '#8f939c'}}>
                            Full Name
                            </Text>
                            <TextInput 
                            style= {{ paddingBottom: 12}}
                            placeholder= 'John Doe'
                            returnKeyType= 'next' 
                            underlineColorAndroid= '#d2232a'
                            borderBottomColor= '#d2232a'
                            borderLeftColor= 'white'
                            borderRightColor= 'white'
                            borderTopColor= 'white'
                            borderWidth= '1.5'
                            onSubmitEditing= {()=> this.passwordInput.focus()}
                            autoCorrect= {false}/>
                        </View>
                        
                        <View style= {styles.user}>     
                            <Text style= {{paddingBottom: 10, color: '#8f939c'}}>
                            User Name
                            </Text>
                            <TextInput 
                            style= {{ paddingBottom: 12}}
                            placeholder= 'John.Doe1 '
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
                <View style= { styles.down}>
                <View style= {styles.email}>     
                    <Text style= {styles.text}>
                        Email
                    </Text >
                    <TextInput 
                    style= {styles.input}
                    placeholder= 'hello@gmail.com '
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

                <View style= {styles.location}>     
                    <Text style= {styles.text}>
                        Location
                    </Text>
                    <TextInput 
                    style= {styles.input}
                    placeholder= 'Butwal, Nepal'
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

                <View style= {styles.gender}>     
                    <Text style= {styles.text}>
                        Gender
                    </Text>
                    <TextInput 
                    style= {styles.input}
                    placeholder= 'Male'
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

                <View style= {styles.date}>     
                    <Text style= {styles.text}>
                        Date OF Birth
                    </Text>
                    <TextInput 
                    style= {styles.input}
                    placeholder= '1994-04-24'
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
                
                <View style= {styles.phone}>     
                    <Text style= {styles.text}>
                        Phone Number
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
                    returnKeyType= 'next' 
                    onSubmitEditing= {()=> this.passwordInput.focus()}
                    autoCorrect= {false}/>
                    </View>
                
                <View style = {styles.login}>   
                    <TouchableOpacity 
                        style={styles.buttoncontainer} 
                        onPress={()=> this.props.navigation.navigate('Profile')}>
                        <Text style = {styles.logintext}>
                        Done
                        </Text>
                    </TouchableOpacity>
                </View>

                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    all: {
        flex: 1
    },
  container: {
    flex: 1,
    margin: '5%'

  },
  picname: {
    flex: 1,
    flexDirection: 'row',
  },
  down: {
    flex: 2,
  },
  pic: {
    flex: 1,
    marginBottom: '5%'

  },
  picture: {
    flex: 6,
    backgroundColor: 'red'
  },
  picturename: {
    flex: 1,
    backgroundColor: '#4d4e53',
    alignItems: 'center',
    justifyContent: 'center'
  },

  name: {
    flex:2,
    marginLeft: '5%'


  },
  full: {
    flex: 1
  },
  user: {
    flex: 1
  },
  email: {
    flex: 1
  },
  location: {
    flex: 1
  },
  phone: {
    flex: 1
  },
  date: {
    flex: 1
  },
  gender: {
    flex: 1
  },
  text: {
    paddingBottom: 8,
    color: '#8f939c',
  },
  input:{
    paddingBottom: 5,
  },
  
  login: {
    flex: 1,
    marginBottom: '1%',
  },
  buttoncontainer:{
    backgroundColor: '#d2232a',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 48,
    borderWidth: 1,
    borderColor: '#edf0f7',
    borderRadius: 4,
  },
  logintext: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 14,

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
    width: 250,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'

},



});