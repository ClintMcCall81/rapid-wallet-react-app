// Imported Packages and Libraries
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Settings = () => {
  return (
     
    // Allows content to push up when keyboard is in use.
     <KeyboardAvoidingView style={styles.container} behavior='padding' >

     {/* Page Container */}
     <View style={styles.buttonContainer}>

       <Text>Settings</Text>

     </View>

   </KeyboardAvoidingView>
  )
}

export default Settings

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

})