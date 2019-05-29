import React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';

import SellCatagory from '../../component/sellcatagory/SellCatagory';

export default class Catagories extends React.Component {
  constructor(){
    super();
    this.state = {
        catagoryList : ''
    }
}


componentDidMount(){
    fetch('http://dev.dailodailoma.com/api/categories', {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json',
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZkZmQxYjgwNjIxMWVmODMyMzExMmNmODkyODliN2RkOTNlZmI0YWFlNGUwMWIxNTJkZjU3M2ZiNzY0ZDk4ODM1ODFhNThjZGYzM2ZjZDEzIn0.eyJhdWQiOiIxIiwianRpIjoiNmRmZDFiODA2MjExZWY4MzIzMTEyY2Y4OTI4OWI3ZGQ5M2VmYjRhYWU0ZTAxYjE1MmRmNTczZmI3NjRkOTg4MzU4MWE1OGNkZjMzZmNkMTMiLCJpYXQiOjE1NTgzNDg3NjEsIm5iZiI6MTU1ODM0ODc2MSwiZXhwIjoxNTg5OTcxMTYxLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.dYXSX59iAMQfbh3S-HKMH0eqNSJV3lftohe858QPxqlCtBu-TWFbDjl_L9SqMSRRHwQ7HPVJ4oYCBhHhXvG3QH8WlVYJOTknqfsYLJS_2Ww6z4DHZy6hdiyedd42GycQoh22yd5feUV2UJq7HotDmxrHFvXoW8FJbK9svwk1WhftkmC0aB_3oL2OgeU95ieb1AQq0QfLzRd1-75HGyCOcr8HMAa75SPB9WdLmUOBxp2QTgFbjmvwJp9uO3cTkhKp7aEFlYkgu_Tl41-VF4JAh-I9B3-S-kkvV8sJXutya9XSsHpOZFANuliReNgzSLAqvFdz4xybt7uG7J5SLtCLpOQ32Ch-yYibroFYGyl06Pz7CGKGQQyTAHy6pzLsPgxT3ztaE8gBgkE_K_acQKT2rFE6uh8RIdwY6lK4tLxqL8uyQ-dVNy1Dh1mYLMGLDmU9m7u8PWV4as-G-j5ak_G0G-Tzp2f7QvNDFH6nzJASWG3lf1ubJTczoP2yMf3XQKwlgrY_qKQWy0Fa1FtqvAP9X0gqtJIKXwY867e5BAOC8xF2cRy58rhESGmPeL2Wy3CwCnvWRVR6OkxhF9gLKSL4Vvl5w8zbGWE3pE61EJ4R4uFeZfDfD7O6d8JBdf-uErqsJoLyBNa2FGlywUoUK72IZhm0FezvV99I3C0VtfXOmaU'
      }
    })
    .then((response)=> response.json())
    .then((responseJson)=> {
        this.setState({catagoryList : responseJson.data.data});
        console.log(this.state.catagoryList);

    })
    .catch((error)=> {
      console.log('error is', error);
    })
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
                    <Text style= {{fontSize: 18, color: '#fff'}}> Choose a Catagory </Text>   
                </View>
                
                <View style= {styles.third}>
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('Description')}>
                    <Text style= {{fontSize: 12, color: '#fff', justifyContent: 'flex-end', paddingRight: 10}}> Next</Text>
                </TouchableOpacity>
                </View>
          </View>
          <View style= {styles.cat}>     
                <TextInput 
                style= {styles.search}
                placeholder= 'Search for Catagory'
                returnKeyType= 'next' 
                autoCorrect= {false}/>
          </View>

          <ScrollView>
            <View>
              {Object.keys(this.state.catagoryList).map((i)=> {
                const url = `http://dev.dailodailoma.com${this.state.catagoryList[i].icon}`
                console.log(url);    
                      return(
                          <SellCatagory 
                          iconUrl= {url}
                          catName= {this.state.catagoryList[i].name}
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
  container: {
    flex:1,
    backgroundColor: '#eceff6',

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

  cat:{
    height: 70,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: '#eceff6',
    backgroundColor: '#fff',
  },
  search: {
    paddingLeft: 24
  },


});