import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import qs from 'qs';

import profile from '../assets/3.png';

export default class EditProfile extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      username: '',
      location: '',
      gender: '',
      dob: '',
      phone: '',
      role: '',
      Password: '',
      facebook_url: '',
      twitter_url: '',
      website_url: '',
    }
  }

  componentDidMount(){
    fetch('http://dev.dailodailoma.com/api/users/1', {
      method: 'GET',
      headers: {
        'X-Requested-With' : 'XMLHttpRequest',
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBiMmJlYWFhOGFiODZjYTRlNGY0MTFkNDhjZTc4NjZjMDg3OTUwMjI2MjA0OTI5OTQyNWY2N2RmM2ViZWRhNjM1ODgzMGQzNTc4YTYyODZlIn0.eyJhdWQiOiIxIiwianRpIjoiMGIyYmVhYWE4YWI4NmNhNGU0ZjQxMWQ0OGNlNzg2NmMwODc5NTAyMjYyMDQ5Mjk5NDI1ZjY3ZGYzZWJlZGE2MzU4ODMwZDM1NzhhNjI4NmUiLCJpYXQiOjE1NTg4Njc4MDgsIm5iZiI6MTU1ODg2NzgwOCwiZXhwIjoxNTkwNDkwMjA4LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.WPVmhV7Su703F6uJFkNHA2XELczshCvoe4NyRnXVCcTdXMtk3r6msy4SKFB3MxtK3D7iZCTgFLKaSWE91W6mZCHn_AK_va9ARcAImN28CTs7L64J8uKAh_C2r3R1WXOJWp0nUZd_OmNnD3Ji65BDc5rNH1K-6lNjIz33PmeEtNTHErNvbfn_VVk_4IKbyMmm6yXtis7s2CYPgdT9wScYTxicQLiH4ffOceca94tSlJPl5Qb0gfLOJYl6nJ6p7JvYXZGzJf954v5juZoq0m1H2nYoRXRmilgIpsGKBapD4JnPY3iLH_BOWjRBJa8ZxG7A_AuwD1jD38pCfogCKHQrIZsXDmQf2xzJRrqA8Yn2YeXN1ybme0vSdCVjoncCDGe6nz8uQdc36V2HsDHxkrsngpnQldkKsxqiUdZby-7qiDx8azI0Ud_WsM1q_JfpYrAixuBsUc6dq_qy7zvoC0iGDQMP3JuBlANvojS09_O40e8ElVB9i1_gWukpncaDrRwn0OxoN1CaRKkrvr4k5P5fHWcCHfxJEibWfmOOgPNCRYm0e3lswWUHigfVzwJoleIhF_E_BDTk_S-1mrfrDvgru28h1hnMzGzquGjEW3Vea8M2c-aFb0y1IW43bT8so9bfLIo6jcU4G5eq32HDeVtCknBboIbVGBdCz8HAfoD5oiw'
      },
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        name: responseJson.user.name,
        email: responseJson.user.email,
        username: responseJson.user.username,
        location: responseJson.user.location,
        gender: responseJson.user.gender,
        dob: responseJson.user.dob,
        phone: responseJson.user.phone,
        facebook_url: responseJson.user.facebook_url,
        twitter_url: responseJson.user.twitter_url,
        website_url: responseJson.user.website_url
      })
    })
    .catch((error) => {
      console.log('error is', error);
    })
  }

  update(){
    console.log(this.state.name);
    fetch(`http://dev.dailodailoma.com/api/users/1/update`,{
      method: 'PUT',
      headers: {
        'X-Requested-With' : 'XMLHttpRequest',
        'Accept' : 'application/json',
        'Content-type' : 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUzZjE4N2RhNGNmNWYwNDA3YTM5ODE3NjA4YmVhNTMxZTUwMTdmMjc5ZGI1NTgxMTA0NGI1YmFlYmI3NWMxOWY1OWVlMjgzZTNlOTE3MTk3In0.eyJhdWQiOiIxIiwianRpIjoiNTNmMTg3ZGE0Y2Y1ZjA0MDdhMzk4MTc2MDhiZWE1MzFlNTAxN2YyNzlkYjU1ODExMDQ0YjViYWViYjc1YzE5ZjU5ZWUyODNlM2U5MTcxOTciLCJpYXQiOjE1NTg5MzIyNTIsIm5iZiI6MTU1ODkzMjI1MiwiZXhwIjoxNTkwNTU0NjUyLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.jngxUGD2pYMjfNxp7hQtF-9PfcQVfUn7mLWzAmnoOp0rsHUT94Du3bukR2rC3XWmvp_R2seGUQwlcrGwXAPi5tHjFZlabAdF-TmSaG1ooo0EtRbbT59hl_-MVSVUHIsbGCodjLr9eqt-aalFR9qduWhi3mRIrYkiDSqKBcvPEf0V6gPRhYhnjzIMtoY4lxH6ZmO0oCkWcwgz5ye-2fg37jJDJ60B7MlTDstNePcjbtdKQaQ1SrRWGMDjL5ghCIsI1xO7EbG9cbzgAJkkhnxthY1TLMH1VYdWV4jEZx3d9VFdATLsAPpwQH8H-f5AwVXVvrlTSJcbfCAWONW-hJqWxxVQeF8uiLNsssxFzZ-OCaLEv_G94KTunyR4XoPDPNV7YXQO6RN7hUBy602r38l2He3PVbmROtDBiy7vadGaAW8w7N3ZJ910hFcSnApUYPxC6IaRV9OoLnsGr54CZprhmdbWKAaquVs5dlg8xENHePmnmowp2vcjC-dVKW4FjaVqLfSKMAI6MCGfX_NlWrWAGvVq8CWedmNgUpFM6VY-o9pvBCn55uK9b77i1WWasaoPboL4tS-hQ7efNEuf3_tIS3mBEwPBG_-ATtDsgoad5M5oj0bYqGxH2ZUDp6FT6S2Y6SWR0Hnf4xdHDV_IHDUqwreL5_0qU4XvgBIIQNstRqw'
      },

      body: qs.stringify({
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        location: this.state.location,
        gender: this.state.gender,
        dob: this.state.dob,
        phone: this.state.phone,
        rolse: this.state.role,
        Password: this.state.Password,
        facebook_url: this.state.facebook_url,
        twitter_url: this.state.twitter_url,
        website_url: this.state.website_url
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      alert(responseJson.message);
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

            <ScrollView 
            style= {styles.container}
            showsVerticalScrollIndicator={false}>
                <View style= { styles.picname}>
                    <View style= {styles.pic}>  
                        <View style= {styles.picture}>
                            <Image source={profile} style= {{height: '100%', width: '100%'}}/>
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
                              this.setState({ name: name })
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
                              this.setState({username: username})
                            }}
                            value = {this.state.username}
                            autoCorrect= {false}/>
                        </View>
                    </View>
                </View>
                <View>
                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Email
                        </Text >
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(email) => {
                          this.setState((prevState, props)=> {
                            email: props.email
                          })
                        }}
                        value = {this.state.email}
                        autoCorrect= {false}/>
                    </View>

                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Location
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(location) => {
                          this.setState({location: location})
                        }}
                        value = {this.state.location}
                        autoCorrect= {false}/>
                    </View>

                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Gender
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(gender) => {
                          this.setState({gender: gender})
                        }}
                        value = {this.state.gender}
                        autoCorrect= {false}/>
                    </View>

                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Date Of Birth
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(dob) => {
                          this.setState({dob: dob})
                        }}
                        value = {this.state.dob}
                        autoCorrect= {false}/>
                    </View>
                    
                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Phone Number
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(phone) => {
                          this.setState({phone: phone})
                        }}
                        value = {this.state.phone}
                        autoCorrect= {false}/>
                    </View>

                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Role
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(role) => {
                          this.setState({role: role})
                        }}
                        value = {this.state.role}
                        autoCorrect= {false}/>
                    </View>

                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Password
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(Password) => {
                          this.setState({Password: Password})
                        }}
                        value = {this.state.Password}
                        autoCorrect= {false}/>
                    </View>

                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Facebook Url
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(facebook_url) => {
                          this.setState({facebook_url: facebook_url})
                        }}
                        value = {this.state.facebook_url}
                        autoCorrect= {false}/>
                    </View>

                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Twitter Url
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(twitter_url) => {
                          this.setState({twitter_url: twitter_url})
                        }}
                        value = {this.state.twitter_url}
                        autoCorrect= {false}/>
                    </View>

                    <View style= {styles.details}>     
                        <Text style= {styles.text}>
                            Website Url
                        </Text>
                        <TextInput 
                        style= {styles.input}
                        underlineColorAndroid= '#d2232a'
                        borderColor= '#d2232a'
                        borderBottomWidth= '1' 
                        onChangeText = {(website_url) => {
                          this.setState({website_url: website_url})
                        }}
                        value = {this.state.website_url}
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
            </ScrollView>
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
    height: 158,
    flexDirection: 'row',

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

  details: {
   height: 61,
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