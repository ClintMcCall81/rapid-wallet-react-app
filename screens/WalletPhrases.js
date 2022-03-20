import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

const WalletPhrases = () => {

  const navigation = useNavigation();

  return (
    // Allows content to push up when keyboard is in use.
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

        <View style={styles.headingContainer}>

            {/* Header Text */}
            <Text style={styles.headerText}>Lets setup your phrases</Text>

            {/* Subheader Text */}
            <Text style={styles.subHeaderText}>Phrases are used as a recovery method should you loose your password.</Text>

            {/* Image / Logo */}
            <Image source={require('../src/phrase-options.png')} style={styles.phraseOptions}/>

            {/* Create a New Wallet */}
            <TouchableOpacity onPress={() => {navigation.navigate("Password")}} style={styles.button}>

            <Text style={styles.buttonText}>I've remembered them</Text>

            </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>
  )
}

export default WalletPhrases

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      headingContainer: {
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
        marginBottom: 20,
      },

      phraseOptions: {
        marginTop: 60,
        width: '100%',
        height: 310,
    },

    button: {
      marginTop: 71,
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

})