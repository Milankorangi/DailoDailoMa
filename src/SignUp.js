import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import image from '../assets/bg.png';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import axios from 'axios';
import qs from 'qs';

export default class SignUp extends React.Component {

  static navigationOptions = {
    header: null
    }

    constructor(props){
      super(props);
      this.state= {
        fullname: '',
        email: '',
        username: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
      }
      this.signup = this.signup.bind(this);
    }

    signup = () => {
      console.log(this.state)
    //   const data = qs.stringify({
    //       fullname: this.state.fullname,
    //       email: this.state.email,
    //       username: this.state.username,
    //       password: this.state.password,
    //       password_confirmation: this.state.password_confirmation
    //   });

    //   const config = {
    //     headers : {
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json'
    //   }
    // };

    //   axios.post('http://dev.dailodailoma.com/api/signup', data, config)
    //   .then((response)=> {
    //     alert(response.message);
    //   })
    //   .catch((error)=> {
    //     console.log(error);
    //   })

      fetch('http://dev.dailodailoma.com/api/signup', {
      method: 'POST',
      headers: {
        'X-Requested-With' : 'XMLHttpRequest',
        'Accept' : 'application/json',
        'Content-type' : 'application/x-www-form-urlencoded',
        
      },
      body: qs.stringify({
          fullname: this.state.fullname,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
      })
    })
    .then((response)=> response.json())
    .then((responseJson)=> {
        alert(responseJson.message);
      
    })
    .catch((error)=> {
      console.log('error is', error);
    })
    }

  render() {
    return(
      <ImageBackground
        source={image}
        style={{height: '100%',
                width: '100%',
                flex: 1}}
                >

        <View style= {styles.container}>
            <View style={styles.viewback}>  
                <TouchableOpacity 
                  style={{alignItems: 'flex-start'}} 
                  onPress={()=> this.props.navigation.goBack()}>
                  <View style= {{flexDirection: 'row'}}>
                      <View>
                          <MaterialCommunityIcons 
                          name='chevron-left'  
                          size= '25'
                          style= {{color: '#d2232a'}} />
                      </View>
                      <View style={{alignItems: 'flex-start', position: 'relative'}}>
                          <Text style = {styles.back}>
                            Go Back
                          </Text>
                      </View>
                  </View>
                </TouchableOpacity>
            </View>
            
            <View style={styles.welcome}> 
              <Text style={styles.welcometo}>Welcome To </Text><Text style={styles.dailo}>
               Dailo Dailo Ma </Text>
            </View>
            
            <View style= {styles.form}>    
                <Text style= {styles.text}>
                  Full Name
                </Text>
                <TextInput 
                style= {styles.input}
                placeholder= 'John Doe'
                underlineColorAndroid= '#d2232a'
                borderBottomColor= '#d2232a'
                borderBottomWidth= '1'
                onChangeText= {(fullname)=> {
                  this.setState({fullname})
                }}
                value= {this.state.fullname}
                autoCorrect= {false}/>
            </View>

              <View style= {styles.form}>     
                <Text style= {styles.text}>
                  User Name
                </Text>
                <TextInput 
                style= {styles.input}
                placeholder= 'John.Doe1 '
                underlineColorAndroid= '#d2232a'
                borderBottomColor= '#d2232a'
                borderBottomWidth= '1'
                onChangeText= {(username)=> {
                  this.setState({username})
                }}
                value= {this.state.username}
                autoCorrect= {false}/>
              </View>

              <View style= {styles.form}>     
                <Text style= {styles.text}>
                  Email
                </Text >
                <TextInput 
                style= {styles.input}
                placeholder= 'hello@gmail.com '
                underlineColorAndroid= '#d2232a'
                borderBottomColor= '#d2232a'
                borderBottomWidth= '1'
                onChangeText= {(email)=> {
                  this.setState({email})
                }}
                value= {this.state.email}
                autoCorrect= {false}/>
              </View>

              <View style= {styles.form}>     
                <Text style= {styles.text}>
                  Phone Number
                </Text>
                <TextInput 
                style= {styles.input}
                placeholder= '9804355990'
                underlineColorAndroid= '#d2232a'
                borderBottomColor= '#d2232a'
                borderBottomWidth= '1'
                onChangeText= {(phone_number)=> {
                  this.setState({phone_number})
                }}
                value= {this.state.phone_number}
                autoCorrect= {false}/>
              </View>
              
              <View style= {styles.form}>     
                <Text style= {styles.text}>
                  Password
                </Text >
                <TextInput 
                style= {styles.input}
                placeholder= '***********' 
                underlineColorAndroid= '#d2232a'
                borderBottomColor= '#d2232a'
                borderBottomWidth= '1'
                onChangeText= {(password)=> {
                  this.setState({password}) 
                }}
                value= {this.state.password}
                secureTextEntry = {true}/>
              </View>

              <View style= {styles.form}>     
                <Text style= {styles.text}>
                  Confirm Password
                </Text>
                <TextInput 
                style= {styles.input}
                placeholder= '***********' 
                underlineColorAndroid= '#d2232a'
                borderBottomColor= '#d2232a'
                borderBottomWidth= '1'
                onChangeText= {(password_confirmation)=> {
                  this.setState({password_confirmation}) 
                }}
                value= {this.state.confirm_password}
                secureTextEntry = {true}/>
              </View>
            
              <View style = {styles.login}>   
                <TouchableOpacity 
                  style={styles.buttoncontainer} 
                  onPress={this.signup}>
                  <Text style = {styles.logintext}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>              
          
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    marginTop: '5%',

  },
  viewback:{
    flex:1.5,
    //alignItems: 'flex-end',
    justifyContent: 'flex-end',
   
   },

  back: {
    color: '#d2232a',
    paddingTop: 3.5
  },
  welcome: {
    flex: 1,
    flexDirection: 'row',
   //justifyContent: 'center',
    alignItems: 'flex-end',
    

  },
  welcometo: {
    fontSize: 20,
    paddingBottom: 16,
    color: '#4d4e53'
  },
  dailo: {
    fontSize: 20,
    color: '#d2232a',
    paddingBottom: 16,
  },

  form: {
    flex:1.2, 
  },

  text: {
    paddingBottom: 10,
    color: '#8f939c',
  },
  input:{
    paddingBottom: 8,
  },

  login: {
    flex: 1,
    marginBottom: '1%',
  },
  buttoncontainer:{
    backgroundColor: '#d2232a',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 160,
    borderWidth: 1,
    borderColor: '#edf0f7',
    borderRadius: 4,
  },
  logintext: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 17,

  },
  

});