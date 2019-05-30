import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';
import Dialog, { DialogContent, DialogTitle, DialogFooter, DialogButton, } from 'react-native-popup-dialog';
import { ImagePicker, Permissions } from 'expo';

export default class Sell extends React.Component {
  static navigationOptions = {
    header: null
  } 
  constructor(props){
    super(props);
    this.state = {
      photo: null,
      isChecked: false,
      visible: false
    }
  }

  openCamera= async()=> {
    this.setState({visible: false});
    await Permissions.askAsync(Permissions.CAMERA);
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
    });
    console.log(result);
    if(!result.cancelled){
      this.setState({photo: result.uri})
    }
  }

  openGallery= async()=> {
    this.setState({visible: false});
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
    });
    console.log(result);
    if(!result.cancelled){
      this.setState({photo: result.uri})
    }
  }

  openDialog = () => {
    this.setState({visible: true});
  }
  render(){
    return(

      <View style= {styles.container}> 
          <View style= {styles.header}>
                  <View style= {styles.first}>
                      <TouchableOpacity 
                          onPress={()=> this.props.navigation.navigate('Home')}>
                          <MaterialCommunityIcons name='arrow-left'  size= '25' style= {{color: '#fff' }} />
                      </TouchableOpacity>
                  </View>
                  <View style= {styles.second}>
                      <Text style= {{fontSize: 18, color: '#fff'}}> Sell an Item </Text>   
                  </View>
          </View>

          <View style= {styles.camera}>                
                <View style= {styles.add} >
                    < TouchableOpacity 
                        onPress={this.openDialog}>
                        <FontAwesome name="camera" size= "60"/>
                    </TouchableOpacity>
                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                          this.setState({ visible: false });
                        }}
                        dialogTitle={<DialogTitle title="Choose Image" />}
                        footer={
                          <DialogFooter>
                            <DialogButton
                              text="CAMERA"
                              onPress={this.openCamera}
                            />
                            <DialogButton
                              text="GALLERY"
                              onPress={this.openGallery}
                            />
                          </DialogFooter>
                        }
                      >
                        <DialogContent style={{justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={{paddingTop: 15}}>Choose Image using Camera or Gallery</Text>
                        </DialogContent>
                    </Dialog>
                </View>
                {
                  (!this.state.photo==null)?
                  <View style= {styles.show}>
                      <Image source= {{uri: this.state.photo}} style={{height: '100%', width: '100%'}}/>
                  </View>:
                  <Image />
                }
          </View>

          <View style= {{height: 56, backgroundColor: '#fff',}}>
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Catagories')} >
                <View style= {styles.cata}>
                    <View style={{width: 300}}>
                        <Text style= {styles.text}> Choose Catagory </Text>
                    </View>
                    <View>
                        {(this.state.isChecked) ? 
                        <FontAwesome name="check" size= "25" color= "#d2232a" /> :
                        <MaterialCommunityIcons />}
                    </View>
                </View>
              </TouchableOpacity>
          </View >

          <View style= {{height: 56, backgroundColor: '#fff', backgroundColor: '#fff',}}>
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Description')} >
                <View style= {styles.cata}>
                    <View style={{width: 300}}>
                        <Text style= {styles.text}> Add Description </Text>
                    </View>
                    <View>
                        {(this.state.isChecked) ? 
                        <FontAwesome name="check" size= "25" color= "#d2232a" /> :
                        <MaterialCommunityIcons />}
                    </View>
                </View>
              </TouchableOpacity>
          </View >

          <View style= {{height: 56, backgroundColor: '#fff'}}>
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('ContactInformation')} >
                <View style= {styles.cata}>
                    <View style={{width: 300}}>
                        <Text style= {styles.text}> Contact Information </Text>
                    </View>
                    <View>
                        {(this.state.isChecked) ? 
                        <FontAwesome name="check" size= "25" color= "#d2232a" /> :
                        <MaterialCommunityIcons />}
                    </View>
                </View>
              </TouchableOpacity>
          </View >

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
    height: 128,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#edf0f7',
    borderBottomWidth: 4

  },
  add: {
    height: 96,
    width: 96,
    backgroundColor: '#8f939c',
    margin: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'

  },

  cata: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#edf0f7',
    alignItems: 'center'
  },

  sell: {
    height: 360,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  buttoncontainer:{
    backgroundColor: '#d2232a',
    alignItems: 'center',
    width: 160,
    height: 48,
    borderWidth: 1,
    borderColor: '#edf0f7',
    borderRadius: 4,
    marginBottom: 80,
    marginRight: 16
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


});