// Imported Packages and Libraries
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';

// Navigation Import
import { useNavigation } from '@react-navigation/native';

// Material Icons Import
import Icon from 'react-native-ico-material-design';

// Firebase Authorization Import
import { auth } from '../firebase';

// Global Variables
var iconHeight = 32;
var iconWidth  = 32;
var walletBalance = 45021517;

var walletFormat = walletBalance.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

// Main Application Screen
const MainDashboard = () => {

  // Screen Navigation
  const navigation = useNavigation();

  // Firebase Sign-out Fucntionality
  const handleSignOut = () => {
    auth
    .signOut()
    .then (() => {
      navigation.replace("Login")
      
    })
    // Alert user if email or password are a bad match / non-existent
    .catch(error => alert(error.message))
  }

  return (

    // Allows content to push up when keyboard is in use.
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

      {/* Shows current account user login, can be null */}
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}

        <View style={styles.buttonContainer}>

            {/* Button Container */}
            <View style={styles.topIconContainer}>

              {/* Back Button */}
              <TouchableOpacity onPress={() => {}} style={styles.iconBack}>
                <Icon name="go-back-left-arrow" color={'#FFFFFF'}/>

              </TouchableOpacity>

              {/* Sign Out Button */}
              <TouchableOpacity onPress={handleSignOut} style={styles.buttonText}>

              <Image source={require('../assets/icons/log-out.png')} style={styles.signOutIcon}/>

              </TouchableOpacity>

            </View>

            {/* Wallet Card */}
            <View style={styles.rectanlgeCard}>
                <ImageBackground source={require('../src/glass-card.png')} style={styles.image}>
                  <Text style={styles.cardHeading}>Main Wallet</Text>
                  <Text style={styles.cardSubHeading}>BALANCE</Text>
                  <Text style={styles.cardBalance}>${walletFormat}</Text>
                  <Text style={styles.balanceDiff}>+0.71%</Text>
                </ImageBackground>
            </View>

            {/* Button Container 02 */}
            <View style={styles.buttonContainer_02}>
              {/* Send */}
              <TouchableOpacity onPress={() => {navigation.navigate("SendCrypto")}} style={styles.buttonSend}>

                <Text style={styles.buttonText}>Send</Text>

              </TouchableOpacity>

              {/* Recieve */}
              <TouchableOpacity onPress={() => {navigation.navigate("BuyCrypto")}} style={[styles.buttonBuy, styles.buttonOutline]}>

                <Text style={[styles.buttonOutlineText]}>Buy</Text>

              </TouchableOpacity>
            </View>

            {/* Account Activity Header */}
            <View style={styles.accountActivity}>

              <Text style={styles.textActivity}>Activity</Text>

            </View>

            {/* Transaction History Elements */}
            <View style={styles.scrollHeight}>
              <ScrollView style={styles.scroll} showsHorizontalScrollIndicator={false}>

                {/* TRANSACTION 01 */}
                <View style={styles.transactionHistory}>
                  
                  <View style={styles.typeAmountContainer}>
                    <Text style={styles.recievedText}>Recieved ETH</Text>
                    <Text style={styles.amountText}>+$160,455.32</Text>
                  </View>

                  <View style={styles.dateTypeContainer}>
                    <Text style={styles.transactionDate}>Dec 12, 2030</Text>
                    <Text style={styles.cryptoAmount}>24 ETH</Text>
                  </View>

                </View>

                {/* TRANSACTION 02 */}
                <View style={styles.transactionHistory}>
                  
                  <View style={styles.typeAmountContainer}>
                    <Text style={styles.recievedText}>Recieved BTC</Text>
                    <Text style={styles.amountText}>+$319,737.92</Text>
                  </View>

                  <View style={styles.dateTypeContainer}>
                    <Text style={styles.transactionDate}>Nov 05, 2030</Text>
                    <Text style={styles.cryptoAmount}>5.00 BTC</Text>
                  </View>

                </View>

                {/* TRANSACTION 03 */}
                <View style={styles.transactionHistory}>
                  
                  <View style={styles.typeAmountContainer}>
                    <Text style={styles.recievedText}>Sent BTC</Text>
                    <Text style={styles.amountText}>-$30,000.00</Text>
                  </View>

                  <View style={styles.dateTypeContainer}>
                    <Text style={styles.transactionDate}>Aug 13, 2030</Text>
                    <Text style={styles.cryptoAmount}>0.594371 BTC</Text>
                  </View>

                </View>

                {/* TRANSACTION 04 */}
                <View style={styles.transactionHistory}>
                  
                  <View style={styles.typeAmountContainer}>
                    <Text style={styles.recievedText}>Recieved XRP</Text>
                    <Text style={styles.amountText}>+$1.09</Text>
                  </View>

                  <View style={styles.dateTypeContainer}>
                    <Text style={styles.transactionDate}>Jul 13, 2030</Text>
                    <Text style={styles.cryptoAmount}>1 XRP</Text>
                  </View>

                </View>

                {/* TRANSACTION 05 */}
                <View style={styles.transactionHistory}>
                  
                  <View style={styles.typeAmountContainer}>
                    <Text style={styles.recievedText}>Recieved ETH</Text>
                    <Text style={styles.amountText}>+$11,737.10</Text>
                  </View>

                  <View style={styles.dateTypeContainer}>
                    <Text style={styles.transactionDate}>Feb 01, 2030</Text>
                    <Text style={styles.cryptoAmount}>5 ETH</Text>
                  </View>

                </View>

                {/* Bottom List Spacer */}
                <View style={styles.bottomListSpacer}></View>

              </ScrollView>
              </View>
            {/* END OF SCROLL VIEW */}

        </View>
        {/* END OF MAIN CONTENT */}

        {/* Navigation Bar */}
        <View style={styles.navContainer}>

          <View style={styles.navBar}>

            {/* Crypto Wallet Prices */}
            <TouchableOpacity onPress={() => navigation.navigate("Portfolio")} style={styles.iconBehave}>
                <Icon name="poll-symbol-on-black-square-with-rounded-corners" height={iconHeight} width={iconWidth} color={'#5AAE57'}/>
            </TouchableOpacity>

            {/* Crypto Currency Swap */}
            <TouchableOpacity onPress={() => {}} style={styles.iconBehave}>
                <Icon name="swap-horizontal-orientation-arrows" height={iconHeight} width={iconWidth} color={'#5AAE57'}/>
            </TouchableOpacity>

            {/* Settings */}
            <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.iconBehave}>
                <Icon name="settings-cogwheel-button" height={iconHeight} width={iconWidth} color={'#5AAE57'}/>
            </TouchableOpacity>

          </View>

        </View>
        {/* END OF NAVIGATION */}
        

    </KeyboardAvoidingView>
    
  )
}

export default MainDashboard
export {walletBalance, walletFormat}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      buttonContainer: {
        width: '83%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        position: 'relative',
      },

      buttonContainer_02: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

      }, 

      typeAmountContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

      }, 

      dateTypeContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

      }, 

      scrollHeight: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
      },
  
      buttonSend: {
          backgroundColor: '#5AAE57',
          width: '48%',
          height: 64,
          paddingHorizontal: 24,
          paddingVertical: 20,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 14,          
      },

      buttonBuy: {
        backgroundColor: '#5AAE57',
        width: '48%',
        height: 64,
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 14,
      },
  
      buttonOutline: {
          backgroundColor: '#EBFFEB',
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

      topIconContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

      },

      signOutIcon: {
        width: 20,
        height: 20,
      },

      iconBack: {
        width: 20,
        height: 20,
      },

      // Wallet Card Styling
      rectanlgeCard: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        marginTop: 15,
      },

      image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      cardHeading: {
        fontFamily: 'Inter-Bold',
        fontSize: 12,
        color: 'white',

      },
      
      cardSubHeading: {
        fontFamily: 'Inter-Regular',
        fontSize: 21,
        color: 'white',
      },

      cardBalance:  {
        fontFamily: 'Inter-Regular',
        fontSize: 43,
        color: 'white',
      }, 

      balanceDiff: {
        fontFamily: 'Inter-Regular',
        fontSize: 21,
        marginTop: 25,
        color: 'white',
      },

      // Transaction Activity
      accountActivity: {
        width: '100%',
        marginTop: 38,
       

      },

      textActivity: {
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        marginBottom: 30,
        textAlign: 'left',
      },

      transactionHistory: {
        marginTop: 10,
        width: '100%',
        height: 73,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#E6E9EC',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
      },

      // Transaction Card Elements
      recievedText: {
        fontFamily: 'Inter-Light',
        fontSize: 17,
      },

      amountText: {
        fontFamily: 'Inter-Light',
        textAlign: 'right',
        fontSize: 17,

      },

      transactionDate: {
        fontFamily: 'Inter-Thin',
        fontSize: 12,
        marginTop: 10,
      },

      cryptoAmount: {
        fontFamily: 'Inter-Thin',
        fontSize: 12,
        marginTop: 10,
      },
      // END OF CARD ELEMENTS

      // Navigation
      navContainer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
      },

      navBar: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        width: '100%', 
        height: 90,
        justifyContent: 'space-evenly',
        
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

        shadowColor: 'black',
        shadowOpacity: 10,
        shadowOffset: { width: 20, height: 20},
        shadowRadius: 10,
        elevation: 20,
        
      },

      iconBehave: {
        padding: 14,
        justifyContent: 'center',
      },

      scroll: {
        width: '100%',
      },

      bottomListSpacer: {
        height: 20,
      },
})