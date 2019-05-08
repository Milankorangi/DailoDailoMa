import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';



export default class Catagory extends React.Component {
  render(){
    return(
      <View style= {styles.container}>
          <View style= {styles.cat}> 
              <Text style= {styles.text}> All Catagory</Text>
          </View>

          <View style= {styles.mencloth}> 
              <View style= {styles.shirt}> 
                  <MaterialCommunityIcons name="tshirt-crew-outline" size= "40" color="#d2232a"/> 
              </View>

              <View style= {{flex:4.5, justifyContent: 'center', }}> 
                  <Text style= {styles.text}> Men's Clothing</Text> 
              </View>
              
              <View style= {{flex:1, marginTop: 10, marginBottom: 14, marginRight: 21, justifyContent: 'center', 
                alignItems: 'center', borderRadius: 8, backgroundColor: '#f3f3f3', width:15, height: 30}}> 
                  <FontAwesome name="plus" size= "20"/> 
              </View>
          </View>

          <View style= {styles.electronics}> 
              <View style= {styles.tv}> 
                  <MaterialCommunityIcons name="television" size= "40" color="#d2232a"/> 
              </View>

              <View style= {{flex:4.5, justifyContent: 'center', }}> 
                  <Text style= {styles.text}> Electronics </Text> 
              </View>
              
              <View style= {{flex:1, marginTop: 10, marginBottom: 14, marginRight: 21, justifyContent: 'center', 
                alignItems: 'center', borderRadius: 8, backgroundColor: '#f3f3f3', width:15, height: 30}}> 
                  <FontAwesome name="plus" size= "20"/> 
              </View>
          </View>

          <View style= {styles.automobiles}> 
              <View style= {styles.car}> 
                  <MaterialCommunityIcons name="car" size= "40" color="#d2232a" /> 
              </View>

              <View style= {{flex:4.5, justifyContent: 'center', }}> 
                  <Text style= {styles.text}> Automobiles</Text> 
              </View>
              
              <View style= {{flex:1, marginTop: 10, marginBottom: 14, marginRight: 21, justifyContent: 'center', 
                alignItems: 'center', borderRadius: 8, backgroundColor: '#f3f3f3', width:15, height: 30}}> 
                  <FontAwesome name="plus" size= "20"/> 
              </View>
          </View>

          <View style= {styles.healthbeauty}> 
              <View style= {styles.body}> 
                  <MaterialCommunityIcons name="human" size= "40" color="#d2232a"/> 
              </View>

              <View style= {{flex:4.5, }}> 
                  <Text style= {{paddingTop: 20, color: '#262629', fontSize: 14, paddingLeft: 16}}> 
                  Health & Beauty</Text> 
              </View>
              
              <View style= {{flex:1, marginTop: 10, marginBottom: 14, marginRight: 21, justifyContent: 'center', 
              alignItems: 'center', borderRadius: 8, backgroundColor: '#f3f3f3', width:15, height: 30}}> 
                  <FontAwesome name="plus" size= "20"/> 
              </View>
          </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eceff6',

  },
  cat:{
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eceff6',
    backgroundColor: '#fff'


  },

  mencloth: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eceff6',
    

  },

  electronics: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eceff6',
    

  },
  automobiles: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eceff6',
    

  },

  healthbeauty: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eceff6',
    

  },

  text: {
    color: '#262629',
    fontSize: 14,
    paddingLeft: 16
  },
  shirt: {
    flex:1, 
    justifyContent: 'center', 
    marginLeft: 16, 
    marginTop: 5, 
    marginBottom: 14, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 26, 
    backgroundColor: '#f3f3f3', 
    width:56, 
    height: 56
  },

  tv: {
    flex:1, 
    justifyContent: 'center', 
    marginLeft: 16, 
    marginTop: 5, 
    marginBottom: 14, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 26, 
    backgroundColor: '#f3f3f3', 
    width:56, 
    height: 56
  },
  car: {
    flex:1, 
    justifyContent: 'center', 
    marginLeft: 16, 
    marginTop: 5, 
    marginBottom: 14, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 26, 
    backgroundColor: '#f3f3f3', 
    width:56, 
    height: 56
  },

  body: {
    flex:1, 
    justifyContent: 'center', 
    marginLeft: 16, 
    marginTop: 5, 
    marginBottom: 14, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 26, 
    backgroundColor: '#f3f3f3', 
    width:56, 
    height: 56
  }


});