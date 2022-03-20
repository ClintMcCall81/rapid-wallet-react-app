import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

const Password = () => {

  const navigation = useNavigation();

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

  // Create New Wallet SIGNUP
  const handleSignUp = () => {

    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {

      const user = userCredentials.user;
      console.log("Signed Up with : ",user.email);

    })
    .catch(error => alert(error.message))
  }

  return (
    // Allows content to push up when keyboard is in use.
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

        <View style={styles.headingContainer}>

            {/* Header Text */}
            <Text style={styles.headerText}>Now for your super secure account</Text>

            {/* Subheader Text */}
            <Text style={styles.subHeaderText}>This stays between us ;)</Text>

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
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>

              <Text style={styles.buttonText}>Create Account</Text>

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