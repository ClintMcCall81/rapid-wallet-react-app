// Imported Packages and Libraries
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

// Application + Page Content
const LoginScreen = () => {

    const navigation = useNavigation();


  return (
    
    // Allows content to push up when keyboard is in use.
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

      {/* Page Container */}
      <View style={styles.buttonContainer}>

        {/* Image / Logo */}
        <Image source={require('../src/rapid-wallet-logo.png')} style={styles.appLogo}/>

        {/* Header Text */}
        <View>

            <Text style={styles.headerText}>Lets get you Started</Text>

        </View>

        {/* Login */}
        <TouchableOpacity onPress={() => {navigation.navigate("LoginDetails")}} style={styles.button}>

            <Text style={styles.buttonText}>Login</Text>

        </TouchableOpacity>

       {/* Create New Wallet */}
        <TouchableOpacity onPress={() => {navigation.navigate("WalletCreation")}} style={[styles.button, styles.buttonOutline]}>

            <Text style={[styles.buttonOutlineText]}>Create New Wallet</Text>

        </TouchableOpacity>

        {/* Agreement Text */}
        <Text style={styles.agreementText}>By signing up you agree to our Privacy Policy and Terms</Text>

      </View>

    </KeyboardAvoidingView>
    
  )
}

export default LoginScreen

//  Application + Page Styling
const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        width: '73.19%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    button: {
        backgroundColor: '#5AAE57',
        width: '100%',
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonOutline: {
        backgroundColor: '#EBFFEB',
        marginTop: 20,
    },

    buttonText: {
        color: 'white',
        fontFamily: 'Inter-Regular',
        fontSize: 17,
    },

    buttonOutlineText: {
        color: '#5AAE57',
        fontFamily: 'Inter-Regular',
        fontSize: 17,
    },

    agreementText: {
        color: '#9A9A9A',
        marginTop: 32,
        fontSize: 12,
    },

    appLogo: {
        width: 225,
        height: 227,
    },

    headerText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 35,
        textAlign: 'center',
        marginTop: 33,
        marginBottom: 54,
    },

})