import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage
} from 'react-native';
import image from '../assets/bg.png';
import { TextInput } from 'react-native-gesture-handler';
import{ connect }from 'react-redux';
import { getUser } from './actions/GetUser';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      user: {
        email: '',
        password: ''
      }
    }
    this.login = this.login.bind(this);
  }

  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if(value !== null) {
      this.props.navigation.navigate('Home');
    }
  }

  login = () => {
    const { user } = this.state;
    this.props.onLogin({user});
    fetch('http://dev.dailodailoma.com/api/login', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json',
        
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response)=> response.json())
    .then((responseJson)=> {
      if(responseJson.status == 'success' ){
        AsyncStorage.setItem('user', responseJson.token);
        this.props.navigation.navigate('Home');
      }
      else{
        alert(responseJson.message);
      }
    })
    .catch((error)=> {
      console.log('error is', error);
    })

    // axios.post('http://dev.dailodailoma.com/api/login', {
    //   'email': 'this.state.email',
    //   'password': 'this.state.password'
    // },
    // {
    //   headers: {
    //     'XMLHttpRequest' : 'X-Requested-With',
    //     'Content-type' : 'application/json',
    //   }
    // }).then(response=> {
    //   alert(response)
    // })

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
              borderBottomWidth= '1.5'
              onChangeText= {(email)=> {
                this.setState({email})
              }}
              value= {this.state.user.email}
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
              borderBottomWidth= '1.5'
              onChangeText= {(password)=> {
                this.setState({password}) 
              }}
              value= {this.state.user.password}
              secureTextEntry = {true}/>
          </View>

          <View style = {styles.login}>   
            <TouchableOpacity 
              style={styles.buttoncontainer} 
              onPress={this.login}>
              <Text style = {styles.logintext}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style= {styles.signnew}>   
              <Text style={{color: '#8f939c', 
              fontSize: 14, alignItems: 'flex-start'}}>Want To Create New Account? </Text>
              
              <TouchableOpacity 
                    style={styles.signup} 
                    onPress={()=> this.props.navigation.navigate('SignUp')}>
                    <Text style= {{color: '#d2232a', alignItems: 'flex-start'}} >
                      Sign Up
                    </Text>
              </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  onLogin: user => {
    dispatch(getUser(user));
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    marginTop: '5%',


  },
  welcome: {
    flex: 2.5,
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
    flex: 1,
    justifyContent: 'center',
    marginTop: 7

  },
  vpassword:{
    flex: 1,
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
    marginTop: 20

  },
  signnew: {
    flex: 2,
    flexDirection: 'row',
  },

});

export default connect(null, mapDispatchToProps)(Login);