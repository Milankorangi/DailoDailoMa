import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import ImagePicker from 'react-native-image-picker';


const options ={
  title: 'Choose Image Options',
  takePhotoButtonTitle: 'Open Camera',
  chooseFromLibraryButtonTitle: 'Choose From Library'
}

export default class Sell extends React.Component {
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
          <View style= {styles.camera}>
                <View style= {styles.add} >
                    < TouchableOpacity 
                        onPress={this.openCamera}>
                        <FontAwesome name="camera" size= "60"/>
                    </TouchableOpacity>
                  </View>

                <View style= {styles.show}>

                 </View>

          </View>

          <View style= {styles.catagory}>
              <Text style= {styles.text}> Choose Catagory </Text>
          </View >

          <View style= {styles.description}>
              <Text style= {styles.text}> Add Description </Text>
          </View >

          <View style= {styles.information}>
              <Text style= {styles.text}> Contact Information </Text>
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
    flex: 1,
    backgroundColor: '#8f939c',
    margin: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'

  },
  show: {
    flex:2

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


});