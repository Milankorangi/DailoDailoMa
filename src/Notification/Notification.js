import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons  } from 'react-native-vector-icons';

import image from '../../assets/store-ad.png';

export default class Notification extends React.Component {
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
                    <Text style= {{fontSize: 18, color: '#fff'}}> Notification </Text>   
                </View>
        </View>
            
        <View style= {styles.new}>
            {/* <View style= {{flex: 1}}> 
                <Text> new</Text>
            </View>
            <View style= {styles.show}>
                <View>
                  <Image />
                </View>
                <View>
                    <Text> Jhon Doe</Text>
                    <Text> Liked your post</Text>
                    <Text> 10 minutes ago</Text>
                </View>
                <View>
                    <Image />
                </View>
            </View>
            <View style= {styles.show}>
                <View>
                  <Image />
                </View>
                <View>
                    <Text> Jane Doe</Text>
                    <Text> Liked your post</Text>
                    <Text> 10 minutes ago</Text>
                </View>
                <View>
                    <Image />
                </View>
            </View>
          
            <View style= {styles.show}>
                <View>
                  <Image />
                </View>
                <View>
                    <Text> Jane Doe</Text>
                    <Text> Commented "Lorem is very good. so I liked your post and commented on your post so          pleaase respond it and lookking further it"</Text>
                    <Text> 10 minutes ago</Text>
                </View>
                <View>
                    <Image />
                </View>
            </View>
          

        </View>

            <View style= {styles.ad}>
            <Image source={image} />
            </View>

            <View style= {styles.earlier}> */}
              <Text> No Notification</Text>
            </View> 
            

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  
  },
  new: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  ad: {
    flex: 1,

  },
  earlier: {
    flex: 4

  },
  show: {
    flex: 1.775,
    flexDirection: 'row'
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