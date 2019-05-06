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

export default class SignUp extends React.Component {

  static navigationOptions = {
    header: null
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
                  style={styles.buttonback} 
                  onPress={()=> this.props.navigation.goBack()}>
                  <Text style = {styles.back}>
                    Go Back
                  </Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.welcome}> 
              <Text style={styles.welcometo}>Welcome To </Text><Text style={styles.dailo}> Dailo Dailo Ma </Text>
            </View>
            
            <View style= {styles.form}>    
                <Text style= {styles.text}>
                  Full Name
                </Text>
                <TextInput 
                style= {styles.input}
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

              <View style= {styles.form}>     
                <Text style= {styles.text}>
                  User Name
                </Text>
                <TextInput 
                style= {styles.input}
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

              <View style= {styles.form}>     
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

              <View style= {styles.form}>     
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
              
              <View style= {styles.form}>     
                <Text style= {styles.text}>
                  Password
                </Text >
                <TextInput 
                style= {styles.input}
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

              <View style= {styles.form}>     
                <Text style= {styles.text}>
                  Confirm Password
                </Text>
                <TextInput 
                style= {styles.input}
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
                  onPress={()=> this.props.navigation.navigate('store')}>
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
  buttonback: {
   // flex: 1,
  },
  back: {
    color: '#d2232a',
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