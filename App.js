// Imported Packages and Libraries
import React, { useEffect, useState }    from 'react';
import { StyleSheet, Text, View }        from 'react-native';
import { useFonts }                      from '@expo-google-fonts/inter';
import 'react-native-gesture-handler';

// Imported API Calls
import { getMarketData } from './services/cryptoService';


// React Navigator Import
import { NavigationContainer }          from '@react-navigation/native';
import { createNativeStackNavigator }   from '@react-navigation/native-stack';

// Screens for React Navigator
import LoginScreen      from     './screens/LoginScreen';
import WalletCreation   from     './screens/WalletCreation';
import WalletPhrases    from     './screens/WalletPhrases';
import Password         from     './screens/Password';
import MainDashboard    from     './screens/MainDashboard';
import LoginDetails     from     './screens/LoginDetails';
import Portfolio        from     './screens/Portfolio';
import SendCrypto       from     './screens/SendCrypto';
import BuyCrypto        from     './screens/BuyCrypto';
import SendConfirmation from     './screens/SendConfirmation';
import BuyConfirmation  from     './screens/BuyConfirmation';
import Settings         from     './screens/Settings';

// Setup and Functionality
const Stack = createNativeStackNavigator();

// Application Content
export default function App() {

  // Check if local fonts are loaded in
  let [fontsLoaded] = useFonts({
    'Inter-Black'         :require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold'          :require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold'     :require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight'    :require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light'         :require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium'        :require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular'       :require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold'      :require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin'          :require('./assets/fonts/Inter-Thin.ttf'),
  });

  if(!fontsLoaded) {
    alert("Fonts not Loaded");
  }

  
  return (
    
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen options={{headerShown: false}} name="Login"                 component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="WalletCreation"        component={WalletCreation} />
        <Stack.Screen options={{headerShown: false}} name="WalletPhrases"         component={WalletPhrases} />
        <Stack.Screen options={{headerShown: false}} name="Password"              component={Password} />
        <Stack.Screen options={{headerShown: false}} name="MainDashboard"         component={MainDashboard} />
        <Stack.Screen options={{headerShown: false}} name="LoginDetails"          component={LoginDetails} />
        <Stack.Screen options={{headerShown: false}} name="Portfolio"             component={Portfolio} />
        <Stack.Screen options={{headerShown: false}} name="SendCrypto"            component={SendCrypto} />
        <Stack.Screen options={{headerShown: false}} name="BuyCrypto"             component={BuyCrypto} />
        <Stack.Screen options={{headerShown: false}} name="SendConfirmation"      component={SendConfirmation} />
        <Stack.Screen options={{headerShown: false}} name="BuyConfirmation"       component={BuyConfirmation} />
        <Stack.Screen options={{headerShown: false}} name="Settings"              component={Settings} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

//  Application General Styling
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
