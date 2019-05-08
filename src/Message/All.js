import React from 'react';

import { View, Text, StyleSheet, Image} from 'react-native';
// import ad from '../../assets/store-ad.png';


export default class All extends React.Component {
  
  render(){
    return(
      <View style= {styles.container}>
          <Text> Show All messages </Text>
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

  
});