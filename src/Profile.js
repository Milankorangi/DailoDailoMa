import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';

import mainProfile from '../assets/22.png';
import profile from '../assets/15.png';

import Grid from '../component/home/Grid';


export default class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            productList : ''
        }
    }


    componentDidMount(){
        fetch('http://dev.dailodailoma.com/api/products', {
          method: 'GET',
          headers: {
            'Accept' : 'application/json',
            'Content-type' : 'application/json',
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZkZmQxYjgwNjIxMWVmODMyMzExMmNmODkyODliN2RkOTNlZmI0YWFlNGUwMWIxNTJkZjU3M2ZiNzY0ZDk4ODM1ODFhNThjZGYzM2ZjZDEzIn0.eyJhdWQiOiIxIiwianRpIjoiNmRmZDFiODA2MjExZWY4MzIzMTEyY2Y4OTI4OWI3ZGQ5M2VmYjRhYWU0ZTAxYjE1MmRmNTczZmI3NjRkOTg4MzU4MWE1OGNkZjMzZmNkMTMiLCJpYXQiOjE1NTgzNDg3NjEsIm5iZiI6MTU1ODM0ODc2MSwiZXhwIjoxNTg5OTcxMTYxLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.dYXSX59iAMQfbh3S-HKMH0eqNSJV3lftohe858QPxqlCtBu-TWFbDjl_L9SqMSRRHwQ7HPVJ4oYCBhHhXvG3QH8WlVYJOTknqfsYLJS_2Ww6z4DHZy6hdiyedd42GycQoh22yd5feUV2UJq7HotDmxrHFvXoW8FJbK9svwk1WhftkmC0aB_3oL2OgeU95ieb1AQq0QfLzRd1-75HGyCOcr8HMAa75SPB9WdLmUOBxp2QTgFbjmvwJp9uO3cTkhKp7aEFlYkgu_Tl41-VF4JAh-I9B3-S-kkvV8sJXutya9XSsHpOZFANuliReNgzSLAqvFdz4xybt7uG7J5SLtCLpOQ32Ch-yYibroFYGyl06Pz7CGKGQQyTAHy6pzLsPgxT3ztaE8gBgkE_K_acQKT2rFE6uh8RIdwY6lK4tLxqL8uyQ-dVNy1Dh1mYLMGLDmU9m7u8PWV4as-G-j5ak_G0G-Tzp2f7QvNDFH6nzJASWG3lf1ubJTczoP2yMf3XQKwlgrY_qKQWy0Fa1FtqvAP9X0gqtJIKXwY867e5BAOC8xF2cRy58rhESGmPeL2Wy3CwCnvWRVR6OkxhF9gLKSL4Vvl5w8zbGWE3pE61EJ4R4uFeZfDfD7O6d8JBdf-uErqsJoLyBNa2FGlywUoUK72IZhm0FezvV99I3C0VtfXOmaU'
          }
        })
        .then((response)=> response.json())
        .then((responseJson)=> {
            this.setState({productList : responseJson.data.data});
            // console.log(this.state.productList);

        })
        .catch((error)=> {
          console.log('error is', error);
        })
      }
    
    
  render() {
    return (
    <View style= {styles.all}>
        <View style= {styles.header}>
                <View style= {styles.first}>
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.goBack()}>
                    <MaterialCommunityIcons name='arrow-left'  size= '25' style= {{color: '#fff' }} />
                </TouchableOpacity>
                </View>
                <View style= {styles.second}>
                    <Text style= {{fontSize: 18, color: '#fff'}}> Profile</Text>   
                </View>
                
                <View style= {styles.third}>
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('EditProfile')}>
                    <Text style= {{fontSize: 12, color: '#fff', justifyContent: 'flex-end', paddingRight: 10}}> Edit</Text>
                </TouchableOpacity>
                </View>

        </View>

        <ScrollView style= {styles.container}>
            <View style= {styles.profile}>
                <View style= {{height: 120, flexDirection: 'row'}}>
                    <View style= {{height: 95, width: 95, borderRadius: 47.5, margin:17}}>
                        <Image source= {mainProfile} />
                    </View>
                    <View style= {{justifyContent: 'center'}}>
                        <View>
                            <Text style= {{fontSize:18, color: '#262629'}}>Jane Doe</Text>
                        </View>
                        <View>
                            <Text style= {{fontSize:12, color: '#8f939c'}}>Butwal, Nepal</Text>
                        </View>
                    </View>
                </View>
                <View style= {{height: 80, flexDirection: 'row'}}>
                    <View style= {{flex:1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderColor: '#edf0f7'}}>
                        <View>
                            <Text style= {styles.deal}> 3</Text>
                        </View>
                        <View>
                            <Text style= {styles.deal}>Listing</Text>
                        </View>
                    </View>
                    <View style= {{flex:1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#edf0f7'}}>
                        <View>
                            <Text style= {styles.deal}> 3</Text>
                        </View>
                        <View>
                            <Text style= {styles.deal}>Sold</Text>
                        </View>
                    </View>
                    <View style= {{flex:1, alignItems: 'center', justifyContent: 'center', borderLeftWidth: 1, borderColor: '#edf0f7', marginRight: 16}}>
                        <View>
                            <Text style= {styles.deal}> Offer</Text>
                        </View>
                        <View>
                            <Text style= {styles.deal}>Made</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style= {{height: 32}}>
                <Text style= {{color: '#8f939c', fontSize: 12, paddingLeft: 16}}> Listings</Text>
            </View>

            <View style= {styles.grid}>
                {/* {console.log(this.state.productList)} */}
               {Object.keys(this.state.productList).map((i)=> {
                   const url = `http://dev.dailodailoma.com${this.state.productList[i].featuredimages[0]}`     
                    return(
                            <Grid profileImage = {profile}
                                productImage = {url}
                                title = {this.state.productList[i].title}
                                description = {this.state.productList[i].description}
                                price = {this.state.productList[i].price}
                         />                 
                    )
                })} 
            </View> 

        </ScrollView> 
</View>
    );

  }
}

const styles = StyleSheet.create({
    all: {
      flex:1,
      backgroundColor: '#fff',
    },
    container: {
      flex:1,
      backgroundColor: '#fff',
    },

    profile: {
        height: 200,
        width: 400,
    },

  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  
  deal: {
      fontSize: 12,
      color: '#262629'
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
    width: 230,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'

},

third: {
    width: 70,
    marginTop: 20,
    alignItems: 'flex-end',
    marginRight: 16
},
});