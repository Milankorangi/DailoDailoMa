import React from 'react';
import {

  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import image from '../assets/bg.png';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
    }
 
  render() {
    return (
      <ImageBackground
        source={image}
        style={{height: '100%',
                width: '100%',
                flex: 1}}
                >

        <View style={styles.container}>
          
          <View style={styles.welcome}> 
            <Text style={styles.welcometo}>Welcome To </Text><Text style={styles.dailo}> Dailo Dailo Ma </Text>
          </View>
          
          <View style= {styles.vemail}>    
              <Text style={styles.text}>
                Email
              </Text >
              <TextInput 
              style={styles.temail} 
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

          <View style= {styles.vpassword}>    
              <Text style= {styles.text}>
                Password
              </Text>
              <TextInput 
              style={styles.tpassword}
              placeholder= '***********' 
              underlineColorAndroid= '#d2232a'
              borderBottomColor= '#d2232a'
              borderLeftColor= 'white'
              borderRightColor= 'white'
              borderTopColor= 'white'
              borderWidth= '1.5'
              returnKeyType= 'go'
              secureTextEntry
              ref = {(input)=> this.passwordInput = input}/>
          </View>

          <View style = {styles.login}>   
            <TouchableOpacity 
              style={styles.buttoncontainer} 
              onPress={()=> this.props.navigation.navigate('EditProfile')}>
              <Text style = {styles.logintext}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style= {styles.signnew}>   
              <Text style={{color: '#8f939c', 
              fontSize: 14, alignItems: 'flex-start',  paddingTop: 12}}>Want To Create New Account? </Text>
              
              <TouchableOpacity 
                    style={styles.signup} 
                    onPress={()=> this.props.navigation.navigate('SignUp')}>
                    <Text style= {{color: '#d2232a', alignItems: 'flex-start', paddingTop: 12}} >
                      Sign Up
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
  welcome: {
    flex: 2,
    flexDirection: 'row',
   //justifyContent: 'center',
    alignItems: 'flex-end',
    

  },
  welcometo: {
    fontSize: 20,
    paddingBottom: 14,
    color: '#4d4e53'

  },
  dailo: {
    fontSize: 20,
    color: '#d2232a',
    paddingBottom: 14,
  },
  vemail: {
    flex: 1.5,
    justifyContent: 'center',
    marginTop: 7

  },
  vpassword:{
    flex: 1.5,
    justifyContent: 'center',
  },
  
  text: {
    paddingBottom: 20,
    color: '#8f939c',

  },
  temail: {
    paddingBottom: 10
  },
  tpassword: {
    paddingBottom: 10
  },

  buttoncontainer:{
    backgroundColor: '#d2232a',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 48,
    borderWidth: 1,
    borderColor: '#edf0f7',
    borderRadius: 4,
  },
  logintext: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 17,


  },

  login: {
    flex: 1,
    marginBottom: '1%',

  },
  signnew: {
    flex: 2,
    flexDirection: 'row',
  },

});