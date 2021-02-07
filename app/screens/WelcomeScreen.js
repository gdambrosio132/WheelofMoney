import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { ImageBackground, StyleSheet, View, Button, Image, Text, navigation } from 'react-native';

export default class WelcomeScreen extends Component {
    render(){
        return (
            <ImageBackground 
                style={styles.background}
                source={require("../assets/spinning-wheel.gif")}
                >
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require("../assets/Wheel_of_Money.png")} />
                    </View>
                    <View style={styles.loginButton}>
                        <Button title="Join in!" onPress={ () => this.props.navigation.navigate('ListActivity') } />
                    </View>
                    <View style={styles.registerButton}>
                        <Button title="Register" />
                    </View>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 300,
        height: 40,
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
});
