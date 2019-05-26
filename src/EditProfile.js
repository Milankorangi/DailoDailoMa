import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import qs from 'qs';

export default class EditProfile extends React.Component {
  constructor(){
    super();
    this.state = {
      id: '',
      name: '',
      email: '',
      username: '',
      location: '',
      gender: '',
      dob: '',
      phone: '',
      featuredimage: ''
    }
  }

  componentDidMount(){
    fetch('http://dev.dailodailoma.com/api/users/1', {
      headers: {
        'X-Requested-With' : 'XMLHttpRequest',
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBiMmJlYWFhOGFiODZjYTRlNGY0MTFkNDhjZTc4NjZjMDg3OTUwMjI2MjA0OTI5OTQyNWY2N2RmM2ViZWRhNjM1ODgzMGQzNTc4YTYyODZlIn0.eyJhdWQiOiIxIiwianRpIjoiMGIyYmVhYWE4YWI4NmNhNGU0ZjQxMWQ0OGNlNzg2NmMwODc5NTAyMjYyMDQ5Mjk5NDI1ZjY3ZGYzZWJlZGE2MzU4ODMwZDM1NzhhNjI4NmUiLCJpYXQiOjE1NTg4Njc4MDgsIm5iZiI6MTU1ODg2NzgwOCwiZXhwIjoxNTkwNDkwMjA4LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.WPVmhV7Su703F6uJFkNHA2XELczshCvoe4NyRnXVCcTdXMtk3r6msy4SKFB3MxtK3D7iZCTgFLKaSWE91W6mZCHn_AK_va9ARcAImN28CTs7L64J8uKAh_C2r3R1WXOJWp0nUZd_OmNnD3Ji65BDc5rNH1K-6lNjIz33PmeEtNTHErNvbfn_VVk_4IKbyMmm6yXtis7s2CYPgdT9wScYTxicQLiH4ffOceca94tSlJPl5Qb0gfLOJYl6nJ6p7JvYXZGzJf954v5juZoq0m1H2nYoRXRmilgIpsGKBapD4JnPY3iLH_BOWjRBJa8ZxG7A_AuwD1jD38pCfogCKHQrIZsXDmQf2xzJRrqA8Yn2YeXN1ybme0vSdCVjoncCDGe6nz8uQdc36V2HsDHxkrsngpnQldkKsxqiUdZby-7qiDx8azI0Ud_WsM1q_JfpYrAixuBsUc6dq_qy7zvoC0iGDQMP3JuBlANvojS09_O40e8ElVB9i1_gWukpncaDrRwn0OxoN1CaRKkrvr4k5P5fHWcCHfxJEibWfmOOgPNCRYm0e3lswWUHigfVzwJoleIhF_E_BDTk_S-1mrfrDvgru28h1hnMzGzquGjEW3Vea8M2c-aFb0y1IW43bT8so9bfLIo6jcU4G5eq32HDeVtCknBboIbVGBdCz8HAfoD5oiw'
      },
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      this.setState({
        name: responseJson.user.name,
        email: responseJson.user.email,
        username: responseJson.user.username,
        location: responseJson.user.location,
        gender: responseJson.user.gender,
        dob: responseJson.user.dob,
        phoner: responseJson.user.phone,
        featuredimage: responseJson.user.featuredimage
      })
    })
    .catch((error) => {
      console.log('error is', error);
    })
  }

  update(){
    fetch(`http://dev.dailodailoma.com/api/users/1/update`,{
      method: 'PUT',
      headers: {
        'X-Requested-With' : 'XMLHttpRequest',
        'Accept' : 'application/json',
        'Content-type' : 'application/x-www-form-urlencoded',
      },
      body: qs.stringify({
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        location: this.state.location,
        gender: this.state.gender,
        dob: this.state.dob,
        phone: this.state.phone,
        featuredimage: responseJson.user.featuredimage
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.log('error is', error);
    })
  }


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
                            <Image source={{ uri: `http://dev.dailodailoma.com${this.state.featuredimage}`}} style= {{height: '100%', width: '100%'}}/>
                        </View>
                        
                        <View style= {styles.picturename}>
                            <TouchableOpacity
                            style={styles.uploadpic}
                            onPress={this.takePicture}>
                                <Text style={{color: 'white'}}> Change Picture </Text>
                            </TouchableOpacity> 
                        </View>

                    </View>
                    <View style= {styles.name}>
                        <View style= {styles.full}>    
                            <Text style= {{paddingBottom: 10, color: '#8f939c'}}>
                            Full Name
                            </Text>
                            <TextInput 
                            style= {{ paddingBottom: 12}}
                            returnKeyType= 'next' 
                            underlineColorAndroid= '#d2232a'
                            borderColor= '#d2232a'
                            borderBottomWidth= '1'
                            onChangeText = {(name) => {
                              this.setState({name})
                            }}
                            value = {this.state.name}
                            autoCorrect= {false}/>
                        </View>
                        
                        <View style= {styles.user}>     
                            <Text style= {{paddingBottom: 10, color: '#8f939c'}}>
                            User Name
                            </Text>
                            <TextInput 
                            style= {{ paddingBottom: 12}}
                            underlineColorAndroid= '#d2232a'
                            borderColor= '#d2232a'
                            borderBottomWidth= '1'
                            onChangeText = {(username) => {
                              this.setState({username})
                            }}
                            value = {this.state.username}
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
                    underlineColorAndroid= '#d2232a'
                    borderColor= '#d2232a'
                    borderBottomWidth= '1' 
                    onChangeText = {(email) => {
                      this.setState({email})
                    }}
                    value = {this.state.email}
                    autoCorrect= {false}/>
                </View>

                <View style= {styles.location}>     
                    <Text style= {styles.text}>
                        Location
                    </Text>
                    <TextInput 
                    style= {styles.input}
                    underlineColorAndroid= '#d2232a'
                    borderColor= '#d2232a'
                    borderBottomWidth= '1' 
                    onChangeText = {(location) => {
                      this.setState({location})
                    }}
                    value = {this.state.location}
                    autoCorrect= {false}/>
                </View>

                <View style= {styles.gender}>     
                    <Text style= {styles.text}>
                        Gender
                    </Text>
                    <TextInput 
                    style= {styles.input}
                    underlineColorAndroid= '#d2232a'
                    borderColor= '#d2232a'
                    borderBottomWidth= '1' 
                    onChangeText = {(gender) => {
                      this.setState({gender})
                    }}
                    value = {this.state.gender}
                    autoCorrect= {false}/>
                </View>

                <View style= {styles.date}>     
                    <Text style= {styles.text}>
                        Date OF Birth
                    </Text>
                    <TextInput 
                    style= {styles.input}
                    underlineColorAndroid= '#d2232a'
                    borderColor= '#d2232a'
                    borderBottomWidth= '1' 
                    onChangeText = {(dob) => {
                      this.setState({dob})
                    }}
                    value = {this.state.dob}
                    autoCorrect= {false}/>
                </View>
                
                <View style= {styles.phone}>     
                    <Text style= {styles.text}>
                        Phone Number
                    </Text>
                    <TextInput 
                    style= {styles.input}
                    underlineColorAndroid= '#d2232a'
                    borderColor= '#d2232a'
                    borderBottomWidth= '1' 
                    onChangeText = {(phone) => {
                      this.setState({phone})
                    }}
                    value = {this.state.phone}
                    autoCorrect= {false}/>
                </View>
                
                <View style = {styles.login}>   
                    <TouchableOpacity 
                        style={styles.buttoncontainer} 
                        onPress={this.update}>
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
    backgroundColor: '#8f939c'
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