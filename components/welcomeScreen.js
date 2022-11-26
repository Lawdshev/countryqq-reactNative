import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Alert, ImageBackground,Pressable, Image } from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.logo}
                        source={require("../assets/logo-red.png")}
                    />
                    <Text style={styles.logoText}>Sell what you don't need</Text>
                </View>
                <View style={styles.btns}>
                    <Pressable style={styles.logbutton} >
                        <Text style={styles.text}>Login</Text>
                    </Pressable>
                    <Pressable style={styles.signbutton} >
                        <Text style={styles.text}>Sign Up</Text>
                    </Pressable>   
                </View>
            </View>
      </ImageBackground>   
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
    },
    container:{
        flex: 1,
        justifyContent: 'space-between'
    },
    logo:{
        width: 100,
        height: 100,
        top: 20,
        alignSelf: 'center'
    },
    btns:{
        width: '100%',
        paddingHorizontal: 20
    },
    logoText:{
        alignSelf:'center',
        marginTop: '20px',
        fontSize: 'bold'
    },
    logbutton:{
        width: '100%',
        paddingVertical: '5px',
        backgroundColor: '#fc5c65',
        paddingVertical: '15px',
        borderRadius: '15px',
        marginBottom: 10
    },
    signbutton:{
        width: '100%',
        paddingVertical: '5px',
        backgroundColor: '#4ECDC4',
        paddingVertical: '15px',
        borderRadius: '15px',
        marginBottom: 10
    },
    text:{
        textAlign: 'center',
        color:'white',
        fontWeight: 'bold'
    }
})
export default WelcomeScreen;