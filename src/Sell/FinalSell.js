import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';
import ImagePicker from 'react-native-image-picker';

import image1 from '../../assets/29.png';
import image2 from '../../assets/26.png';
import image3 from '../../assets/23.png';


const options ={
  title: 'Choose Image Options',
  takePhotoButtonTitle: 'Open Camera',
  chooseFromLibraryButtonTitle: 'Choose From Library'
  }

export default class Sell extends React.Component {
  static navigationOptions = {
    header: null
  } 
  constructor(props){
    super(props);
    this.state = {
      photo: null
    }
  }
  openCamera=()=> {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } 
      else {
        const source = { uri: response.uri };
    
        this.setState({
          photo: source,
        });
      }
    });
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
                      <Text style= {{fontSize: 18, color: '#fff'}}> Sell an Item </Text>   
                  </View>
          </View>

          <View style= {styles.camera}>
                <View style= {styles.show}>
                    <Image source= {image1} />
                </View>
                <View style= {styles.show}>
                    <Image source= {image2} />
                </View>
                <View style= {styles.show}>
                    <Image source= {image3} />
                </View>

                <View style= {styles.add} >
                    < TouchableOpacity 
                        onPress={this.openCamera}>
                        <FontAwesome name="camera" size= "60"/>
                    </TouchableOpacity>
                  </View>
          </View>

          <View style= {styles.catagory}>
            <TouchableOpacity
             onPress={()=> this.props.navigation.navigate('Catagories')} >
              <Text style= {styles.text}> Choose Catagory </Text>
            </TouchableOpacity>
          </View >

          <View style= {styles.description}>
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Description')} >
                <Text style= {styles.text}> Add Description </Text>
            </TouchableOpacity>
          </View >

          <View style= {styles.information}>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('ContactInformation')} >
              <Text style= {styles.text}> Contact Information </Text>
            </TouchableOpacity>
          </View>

          <View style= {styles.sell}>
              <TouchableOpacity 
                  style={styles.buttoncontainer} 
                  onPress={()=> this.props.navigation.navigate('sell')}>
                  <Text style = {styles.logintext}>
                    Sell
                  </Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf0f7',
  },
  camera: {
    flex: 2.5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#edf0f7',
    borderBottomWidth: 4

  },
  add: {
    height: 97,
    width: 97,
    backgroundColor: '#8f939c',
    margin: 16,
    marginLeft: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'

  },
  show: {
    height: 97,
    width: 97,
    backgroundColor: '#8f939c',
    margin: 16,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'

  },

  catagory: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#edf0f7',
    justifyContent: 'center'
  },

  description: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#edf0f7',
    justifyContent: 'center'
  },

  information: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#edf0f7',
    justifyContent: 'center'
    
  },
  sell: {
    flex: 6,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  buttoncontainer:{
    backgroundColor: '#d2232a',
    alignItems: 'center',
    width: '40%',
    height: '15%',
    borderWidth: 1,
    borderColor: '#edf0f7',
    borderRadius: 4,
    marginBottom: '20%',
    marginRight: '5%'
  },

  logintext: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 17,
    paddingTop:14

  },
  text: {
    paddingLeft: 16,
    color: '#262629',
    fontSize: 17,
    
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