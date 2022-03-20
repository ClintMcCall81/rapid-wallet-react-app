// Imported Packages and Libraries
import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

// Application + Page Content
const WalletCreation = () => {

  const navigation = useNavigation();

  return (

    // Allows content to push up when keyboard is in use.
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

      <View style={styles.buttonContainer}>

        {/* Header Text */}
        <Text style={styles.headerText}>What wallet are you creating?</Text>

        {/* Subheader Text */}
        <Text style={styles.subHeaderText}>Its good to know what your starting so we can set you up properly.</Text>

        {/* Option: Bitcoin */}
        <TouchableOpacity onPress={() => {}} style={[styles.button, styles.buttonOutline]}>

            <Text style={[styles.buttonOutlineText]}>Bitcoin</Text>

        </TouchableOpacity>

        {/* Option: Ethereum */}
        <TouchableOpacity onPress={() => {}} style={[styles.button, styles.buttonOutline]}>

            <Text style={[styles.buttonOutlineText]}>Ethereum</Text>

        </TouchableOpacity>

        {/* Option: XRP */}
        <TouchableOpacity onPress={() => {navigation.navigate("WalletPhrases")}} style={styles.button}>

            <Text style={styles.buttonText}>XRP</Text>

        </TouchableOpacity>

        {/* Option: Tether */}
        <TouchableOpacity onPress={() => {}} style={[styles.button, styles.buttonOutline]}>

            <Text style={[styles.buttonOutlineText]}>Tether</Text>

        </TouchableOpacity>

        {/* Option: Other */}
        <TouchableOpacity onPress={() => {}} style={[styles.button, styles.buttonOutline]}>

            <Text style={[styles.buttonOutlineText]}>Other</Text>

        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>

  )
}

export default WalletCreation

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

  headerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 33,
    marginBottom: 15,
    },  

  subHeaderText: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 60,
  },

  button: {
    backgroundColor: '#5AAE57',
    width: '100%',
    paddingHorizontal: 49,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
},

  buttonOutline: {
    backgroundColor: '#EBFFEB',
    marginTop: 15,
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

})