import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons, Feather } from 'react-native-vector-icons';

import TabNavigator from '../Navigation/TabNavigator'; 
import { TextInput } from 'react-native-gesture-handler';

export default class HomeNavigation extends React.Component {
    static navigationOptions = {
        header: null
    }    

  render() {
    return (
        <View style={styles.container}>
            <View style= {styles.header}>
                <View style= {styles.first}>
                    <MaterialCommunityIcons 
                    name='menu'  
                    size= '40' 
                    style= {{color: '#fff'}} 
                    onPress= {()=> {this.props.navigation.toggleDrawer()}}
                    />
                </View>
                <View style= {styles.second}>
                    <TextInput 
                    style={styles.search} 
                    placeholder= 'Search'
                    borderColor= '#d2232a'
                    borderWidth= '1'
                    returnKeyType= 'next' 
                    onSubmitEditing= {()=> this.passwordInput.focus()}
                    autoCorrect= {false}/>   
                </View>
                <View style= {styles.third} >
                        <MaterialCommunityIcons name='bell-outline'  size= '30' style= {{color: '#fff'}} />
                    <View style= {styles.notflex}>
                        <Text style= {styles.notf}> 2</Text>
                    </View>
                </View>
                <View style= {styles.forth}>
                    <Feather name= 'message-circle'  size= '30' style= {{color: '#fff'}} />
                </View>

            </View>
            <TabNavigator />
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
        height: 53,
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
        width: 200,
        marginTop: 20

    },

    third: {
        width: 50,
        marginTop: 20,
        marginLeft: 16
    },

    forth: {
        width: 50,
        marginTop: 20
    },
    notflex: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#fff',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 14,
        marginTop: 3
    },

    notf: {
        fontSize: 6,
        color: '#d2232a'
    },
    search: {
        backgroundColor: '#fff',
        height: 45,
        width: 200,
        borderRadius: 4,
        color: '#8f939c',
        fontSize: 12,
        paddingLeft: 10,
        marginTop: 16,
        alignItems: 'center',
        paddingBottom: 8

    }

});