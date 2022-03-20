// Imported Packages and Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView, TextInput, Picker, PickerItem } from 'react-native';

// Navigation Import
import { useNavigation } from '@react-navigation/native';

// Material Icons Import
import Icon from 'react-native-ico-material-design';


// Import Wallet Balance
import { walletBalance, walletFormat } from './MainDashboard';

const BuyCrypto = () => {

  // Account States
  const [amount, setAmount] = useState('');
  const [password, setPassword] = useState('');

  // Screen Navigation
  const navigation = useNavigation();

  return (
    
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

        {/* Page Container */}
        <View style={styles.contentContainer}>

            <View style={styles.headerContainer}>

                {/* Header Text */}
                <Text style={styles.headerText}>Buying Crypto?</Text>
                
                {/* Subheader Text */}
                <Text style={styles.subHeaderText}>Let us help you!</Text>
            </View>

            {/* Buy Crypto Options */}
            <View style={styles.inputContainer}>

              {/* Select an Account */}
              <View style={styles.dropDownBorder}>
                <Picker style={styles.pickerContainerAccount}>
                  <Picker.Item style={styles.pickerItem} color='grey' label='Please select an account'                     value='disabled' />
                  <Picker.Item style={styles.pickerItem}              label={'Main Account ' + '($' + walletFormat + ')'}  value='mainAccount' />
                  <Picker.Item style={styles.pickerItem}              label='Other Account 01'                             value='otherAccount01' />
                  <Picker.Item style={styles.pickerItem}              label='Other Account 02'                             value='otherAccount02' />
                </Picker>
              </View>

              {/* Select Crypto Type */}
              <View style={styles.dropDownBorder}>
                <Picker style={styles.pickerContainerCrypto}>
                  <Picker.Item style={styles.pickerItem} color='grey' label='Please select a crypto type'          value='disabled' />
                  <Picker.Item style={styles.pickerItem}              label={'Bitcoin (BTC)'}                      value='cryptoType01' />
                  <Picker.Item style={styles.pickerItem}              label='Ethereum (ETH)'                       value='cryptoType02' />
                  <Picker.Item style={styles.pickerItem}              label='Tether (USDT)'                        value='cryptoType03' />
                  <Picker.Item style={styles.pickerItem}              label='XRP (XRP)'                            value='cryptoType04' />
                  <Picker.Item style={styles.pickerItem}              label='Binance (BNB)'                        value='cryptoType05' />
                  <Picker.Item style={styles.pickerItem}              label='Cardano (ADA)'                        value='cryptoType06' />
                </Picker>
              </View>

              {/* Amount */}
              <TextInput 
              placeholder=   "Amount" 
              value=         {amount} 
              onChangeText=  {text => setAmount(text)}
              style=         {styles.input}
              />

              {/* Transfer Password */}
              <TextInput 
              placeholder=    "Password" 
              value=          {password} 
              onChangeText=   {text => setPassword(text)}
              style=          {styles.input}
              secureTextEntry
              />

            </View>

            <View style={styles.buttonContainer}>

              {/* Buy Crypto */}
              <TouchableOpacity onPress={() => {navigation.navigate("BuyConfirmation")}} style={styles.button}>

                <Text style={styles.buttonText}>Send Crypto</Text>

              </TouchableOpacity>

            </View>

        </View>
  </KeyboardAvoidingView>
  )
}

export default BuyCrypto

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

      inputContainer: {
        width: '73.19%',
        
      },

      input: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 69,
        borderRadius: 8,
        marginTop: 15,
        borderColor: '#CDD4D9',
        borderWidth: 1,
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
        fontSize: 17,
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
        marginBottom: 53,
      },

      button: {
        backgroundColor: '#5AAE57',
        width: '100%',
        paddingHorizontal: 115,
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

    pickerContainerAccount: {
      width: '100%',
    },

    pickerContainerCrypto: {
      width: '100%',
    },

    pickerItem: {
      backgroundColor: 'white',
      fontFamily: 'Inter-Regular',
      fontSize: 17,
   },

   dropDownBorder: {
    backgroundColor: 'white',
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 15,
    borderColor: '#CDD4D9',
    borderWidth: 1,
   },

})