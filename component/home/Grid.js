import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';



export default class Grid extends React.Component {
  constructor(){
    super();
    this.state = {
      like : false,
      count : 0
    }
  }

  ifLiked = () => {
    if (this.state.like == true){
      this.setState({
        like: false,
        count : this.state.count - 1
      })
    }
    else{
      this.setState({
        like: true,
        count : this.state.count + 1
      })
    }
  }

  render() {
    return (
        <View style={styles.gridBox}>
            <View style= {styles.box1}> 
                <View style= {{width: 32}}>
                    <Image source= {this.props.profileImage} style= {{height: 24, width: 24, marginLeft: 8, borderRadius: 12}}/>
                </View>
                <View style= {{alignItems: 'center', width: 80}}>
                    <View>
                        <Text style= {styles.profileName}> John Doe</Text>
                    </View>
                    <View>
                        <Text style= {{color: '#8f939c', fontSize: 10}}> 1 day ago</Text>
                    </View>                    
                </View>
                <View style = {{alignItems :'flex-end', justifyContent: 'center', flex: 1}}>
                    <MaterialCommunityIcons name='dots-horizontal'  size= '20' style= {{ color: '#8f939c', paddingRight: 16}} />
                </View> 
            </View>


            <View style= {styles.box2}>
                <Image source= {{uri: this.props.productImage}} style={{width: '90%', height: '90%', margin: 8}}/>
            </View>

            
            <View style= {styles.box3}>
                <Text style= {{font: 12, color: '#262629', paddingRight: 4}}> {this.props.title} </Text>
            </View>


            <View style= {styles.box4}>
                <Text style= {{font: 9, color: '#8f939c', paddingLeft: 4}}> {this.props.description}</Text>
            </View>


            <View style= {styles.box5}>
                <View>
                    <Text style= {{font: 11, color: '#262629', paddingLeft: 4}}> Rs {this.props.price}</Text>
                </View>
                <View style= {{flex: 1, alignItems: 'flex-end', marginRight: 8}}>
                  <TouchableOpacity 
                  onPress={this.ifLiked}
                  >
                    <View style= {this.state.like ? styles.liked : styles.unLiked}>
                        <View>
                         {(this.state.like)?
                            <MaterialCommunityIcons name= "heart" size= '15' color= "#fff"/>
                          :
                            <MaterialCommunityIcons name= "heart-outline" size= '15' color= "#8f939c"/>
                         }
                        </View>
                        <View>
                            {(this.state.count>0)?
                            <Text style= {this.state.like ? {color: 'white', fontSize: 8} : {color: 'black', fontSize: 8}}>{this.state.count}</Text>
                            :
                            <Text> </Text>
                            }
                        </View>        
                    </View>
                  </TouchableOpacity> 
                </View>
            </View>

    </View>
    );

  }
}

const styles = StyleSheet.create({
    gridBox: {
        height: 332,
        width: '50%',
        borderColor: '#edf0f7',
        borderWidth: 0.5,
    
      },
    
      box1: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
      },

      box2: {
        height: 176,
      },
      box3: {
        height: 20,
        justifyContent: 'center'
      },

      box4: {
        height: 56,
        justifyContent: 'center'
      },    
      
      profileName: {
        fontSize: 10,
        color: '#4d4e53',
        paddingLeft: 2,
        paddingBottom: 1
    
      },
    
      box5: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    
      },
      liked: {
        height: 24,
        width: 32,
        borderRadius: 12,
        backgroundColor: '#d2232a',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },

      unLiked: {
        height: 24,
        width: 32,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderColor: '#8f939c',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },

});