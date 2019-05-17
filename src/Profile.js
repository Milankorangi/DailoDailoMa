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
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE3ODQ2YjhiZDRhZWViMTY0NDliNmZiZDVmMGQ0NWQxYjE4NDIxMmIwM2UxNjUyYzRlOTMzNGVlOGI4ZTJjMWIxZDcxZGFiM2NkZmJhNzhhIn0.eyJhdWQiOiIxIiwianRpIjoiYTc4NDZiOGJkNGFlZWIxNjQ0OWI2ZmJkNWYwZDQ1ZDFiMTg0MjEyYjAzZTE2NTJjNGU5MzM0ZWU4YjhlMmMxYjFkNzFkYWIzY2RmYmE3OGEiLCJpYXQiOjE1NTgwNjgxMDYsIm5iZiI6MTU1ODA2ODEwNiwiZXhwIjoxNTg5NjkwNTA2LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.di5EhKLwxC6oivyhbQFd32VILRPZZ_P0RQZ2GjPmPngJeAGQ23Qw6YVDTte_vxScZzPG8Dbxe8OpzmP4ccG0-nNTwvvQ6m1cm8lUqH_qefrxt6O8RcNqxxxF5X1syZHl9QyjLC5mznsaxrmlueZmAuivzmNH3YM7Y7bS9kqek7SPNtQmjB2vI2WjNwOuroeZUTsUuREOuLrzkI3TLNIP6x5h21MdVkf7Opeu8trDxUNRY3gRzswJemt95DkgKkFg0U5XpmKM6IqYcvvOiLF1s8GKgK8Z8AFUotbfUbDQJgQtMCqJyIfXO9yTRrwgs2QBZm521a6ExIaleEzLuw_OuzCtu9cNOVpLluHZeSAG8B1gvzVU0fMuZAtTY5LuI1VHmywH_PGbJ_br1hzSrosfALQg2XMB0S7Ecm8YzPIedl62FUAIpHD-O8PVavnmiHUOEtzyJBZ-WE2V9S51a94pkQxeNFZWAvzok7G5PubZX7AEqK1nUG-prnPcKb9SSBdQtoPayY9INUpgwNStlLbIzWb2PojMdDD300ExAY6u7zSP8LjW3wi5RDye1qU_8onOOc_NI0hRCes21SVOQvMTALbKYhOxQjgFOvmjGxl0mPtwzCjAVEH6kO1MejCgm4m1Y76ncgpsxvkfdwSsiDnA42ZFStd3grSUQQYLsfqcYZA'
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
                    return(
                            <Grid profileImage = {profile}
                                productImage = {this.state.productList[i].image}
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