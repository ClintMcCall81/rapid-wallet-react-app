// Imported Packages and Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView, TextInput, Picker, PickerItem } from 'react-native';

// Navigation Import
import { useNavigation } from '@react-navigation/native';

// Material Icons Import
import Icon from 'react-native-ico-material-design';


// Import Wallet Balance
import { walletBalance, walletFormat } from './MainDashboard';

const SendConfirmation = () => {

  // Account States
  const [amount, setAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');

  // Screen Navigation
  const navigation = useNavigation();

  return (
    
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

        {/* Page Container */}
        <View style={styles.contentContainer}>

            <View style={styles.headerContainer}>

                {/* Image / Logo */}
                <Image source={require('../src/confirmation-check.png')} style={styles.confirmCheck}/>
                
                {/* Subheader Text */}
                <Text style={styles.subHeaderText}>Its been sent!</Text>
            </View>

            <View style={styles.transactionConfirmation}>
                <View style={styles.typeAmountContainer}>
                    <Text style={styles.subText}>Recipient</Text>
                    <Text style={styles.recipientText}>janeDoe@testmail.com</Text>
                    <Text style={styles.subText}>Amount</Text>
                    <Text style={styles.amountText}>24ETH ($160,455.32)</Text>
                    <Text style={styles.subText}>Transaction ID</Text>
                    <Text style={styles.transactionID}>123AF7SM 333KFH4 55506S</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>

              {/* Create Account Button */}
              <TouchableOpacity onPress={() => {navigation.navigate("MainDashboard")}} style={styles.button}>

                <Text style={styles.buttonText}>Done</Text>

              </TouchableOpacity>

            </View>

        </View>
  </KeyboardAvoidingView>
  )
}

export default SendConfirmation

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentContainer: {
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
      },

      headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      subHeaderText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 34,
        textAlign: 'center',
        marginBottom: 53,
      },

      button: {
        backgroundColor: '#5AAE57',
        width: '73.19%',
        paddingHorizontal: 100,
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 112,
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

    confirmCheck: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 23,
      },

      typeAmountContainer: {
        width: '100%',

      }, 

      transactionConfirmation: {
        marginTop: 10,
        width: '73.19%',
        height: 208,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#E6E9EC',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
      },

      recipientText: {
        marginBottom: 10,
        fontFamily: 'Inter-Light',
        textAlign: 'left',
        fontSize: 17,
      },

      amountText: {
        fontFamily: 'Inter-Light',
        textAlign: 'left',
        fontSize: 17,
        marginBottom: 29,
      },

      transactionID: {
        marginBottom: 10,
        fontFamily: 'Inter-SemiBold',
        textAlign: 'left',
        fontSize: 17,
      },

      subText: {
          fontFamily: 'Inter-Regular',
          fontSize: 12,
          color: '#A5A5A5',
          marginBottom: 5,
      },
    
      buttonContainer: {
        width: '100%',
        alignItems: 'center',
      },

})