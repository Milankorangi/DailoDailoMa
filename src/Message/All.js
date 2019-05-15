import React from 'react';

import { View, Text, StyleSheet, Image} from 'react-native';
import { FAB } from 'react-native-paper';
// import ad from '../../assets/store-ad.png';


export default class All extends React.Component {
  
  render(){
    return(
      <View style= {styles.container}>
          <Text> Show All messages </Text>
          <FAB  
          style={styles.fab}
          onPress= {()=> console.log("press")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf0f7',
    justifyContent: 'center',
    alignItems: 'center'
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  
});