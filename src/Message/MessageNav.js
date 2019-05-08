import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';
import { MaterialCommunityIcons  } from 'react-native-vector-icons';

import MessageNavigation from '../../Navigation/MessageNavigation';

export default class HomeNavigation extends React.Component {
    static navigationOptions = {
        header: null
    }    

  render() {
    return (
        <View style={styles.container}>
            <View style= {styles.header}>
                <View style= {styles.first}>
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.goBack()}>
                    <MaterialCommunityIcons name='arrow-left'  size= '25' style= {{color: '#fff' }} />
                </TouchableOpacity>
                </View>
                <View style= {styles.second}>
                    <Text style= {{fontSize: 18, color: '#fff'}}> Messages </Text>   
                </View>
            </View>

            <MessageNavigation />
        </View>
    );

  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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