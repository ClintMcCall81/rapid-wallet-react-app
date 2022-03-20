// Imported Packages and Libraries
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

// Main Application Screen
const Password = () => {

  // Screen Navigation
  const navigation = useNavigation();

  // Email and Password States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => {
      
      if(user) {
        navigation.navigate("MainDashboard")
      }
    })
    return unsubscribe
  }, [])

  // Login Details
  const handleLogin = () => {

    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {

      const user = userCredentials.user;
      console.log("Logged in with : ",user.email);

    })
    // Alert user if email or password are a bad match / non-existent
    .catch(error => alert(error.message))
  }

  return (
    // Allows content to push up when keyboard is in use.
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

        <View style={styles.headingContainer}>

            {/* Header Text */}
            <Text style={styles.headerText}>Enter your credentials below</Text>

            {/* Subheader Text */}
            <Text style={styles.subHeaderText}>We'll handle the rest.</Text>

        </View>

        {/* Account Creation - Firebase Auth */}
        <View style={styles.inputContainer}>

          {/* EMAIL AUTH */}
          <TextInput 
          placeholder="Email" 
          value={email} 
          onChangeText={text => setEmail(text)}
          style={styles.input}
          />

          {/* PASSWORD AUTH */}
          <TextInput 
          placeholder="Password" 
          value={password} 
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          />

        </View>

        <View style={styles.buttonContainer}>

          {/* Create Account Button */}
          <TouchableOpacity onPress={handleLogin} style={styles.button}>

              <Text style={styles.buttonText}>Login</Text>

          </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>
  )
}

export default Password

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
        marginTop: 105,
      },

      inputContainer: {
        width: '73.19%',
        
      },

      input: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 69,
        borderRadius: 8,
        marginTop: 20,
        borderColor: '#CDD4D9',
        borderWidth: 1,
        textAlign: 'center',
      },
    
      headingContainer: {
        width: '80%',
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
        marginBottom: 90,
      },

    button: {
        backgroundColor: '#5AAE57',
        width: '100%',
        paddingHorizontal: 49,
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