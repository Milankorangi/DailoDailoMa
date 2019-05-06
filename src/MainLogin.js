import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import image from '../assets/bg.png';

export default class MainLogin extends React.Component {
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
          
          <View style={styles.login}> 
          <Text style={styles.loginwith}>Login With</Text>
          </View>
          
          <View style= {styles.fg}>
            <View style= {{flexDirection:'row', height: 48, width: 160}}>
              <TouchableOpacity 
                  style={styles.facebook} 
                  onPress={()=> this.props.navigation.navigate('facebook')}>
                  <Text style = {styles.fb}>
                    Facebook
                  </Text>
              </TouchableOpacity>
              <MaterialCommunityIcons name='facebook-box'  size= '25' style= {{position: 'absolute', color: '#fff', paddingTop: 10, paddingLeft: 12}} />
            </View>
            
            <View style= {{flexDirection:'row', height: 48, width: 160}}>
              <TouchableOpacity 
                  style={styles.gmail} 
                  onPress={()=> this.props.navigation.navigate('gmail')}>
                  <Text style = {styles.mail}>
                    Gmail
                  </Text>
              </TouchableOpacity>
              <MaterialCommunityIcons name='google'  size= '25' style= {{position: 'absolute', color: '#696969', paddingTop: 10, paddingLeft: 22}} />
            </View>
          </View>
          
          <View style={styles.oror}>   
            <Text style={styles.or}>Or</Text>
          </View>

          <View style = {styles.email}>   
            <TouchableOpacity 
                style={styles.buttoncontainer} 
                onPress={()=> this.props.navigation.navigate('Login')}>
                <Text style = {styles.fbemail}>
                  Email
                </Text>
            </TouchableOpacity>
            <MaterialCommunityIcons name='email'  size= '25' style= {{position: 'absolute', color: '#fff', paddingTop: 10, paddingLeft: 65}} />
          </View>
          
          <View style= {styles.signnew}>   
              <Text style={{color: '#8f939c', 
              fontSize: 14, alignItems: 'flex-start', paddingTop: 12}}>Want To Create New Account? </Text>
    
              <TouchableOpacity 
                  style={styles.signup} 
                  onPress={()=> this.props.navigation.navigate('SignUp')}>
                  <Text style= {{color: '#d2232a', alignItems: 'flex-start', paddingTop: 12}} >
                    Sign Up
                  </Text>
              </TouchableOpacity>
          </View>

          <View style={styles.skipp}>
              <TouchableOpacity
                  onPress={()=> this.props.navigation.navigate('Home')}>
                  <Text style={styles.skip}>
                    Skip this step
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
    flex: 3,
    flexDirection: 'row',
   //justifyContent: 'center',
    alignItems: 'flex-end',
    

  },
  welcometo: {
    fontSize: 20,
    color: '#4d4e53'

  },
  dailo: {
    fontSize: 20,
    color: '#d2232a',
  },
  login: {
    flex: 1,
    justifyContent: 'center'

  },
  loginwith: {
    fontSize: 14,
    color: '#8f939c',
    alignItems: 'flex-end'
  },
  fg: {
    flex:1,
    flexDirection: 'row',

  },
  facebook: {
    flex: 1,
    height: 48,
    width: 160,
    backgroundColor: '#517fcd',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#edf0f7',
    marginRight: '5%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  fb: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 17,
    paddingLeft: 12
  },

  fbemail: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 17,
    paddingLeft: 40
  },

  mail: {
    textAlign: 'center',
    color: '#696969',
    fontSize: 17,
    
  },
  gmail: {
    flex: 1,
    height: 48,
    width: 160,
    backgroundColor: '#EFEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#edf0f7',
    
  },
  oror: {
    flex:1,
    justifyContent: 'center'

  },
  or: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  buttoncontainer:{
    backgroundColor: '#d2232a',
    width: 216,
    height: 48,
    borderWidth: 1,
    borderColor: '#edf0f7',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  email: {
    flex: 1,
    flexDirection: 'row'
 

  },
  signnew: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  skipp: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  skip: {
  fontSize: 14,
  color: '#8f939c'
  }
});
