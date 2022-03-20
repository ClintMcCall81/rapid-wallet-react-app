import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, FlatList, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../components/ListItem';
import { getMarketData } from '../services/cryptoService';

// Crypto Data
import {SAMPLE_DATA} from '../assets/data/sampleData';

// Material Icons Import
import Icon from 'react-native-ico-material-design';


export default function Portfolio() {

    
    // Global Variables
    var iconHeight = 16;
    var iconWidth  = 16;
    var walletBalance = 45021517;

    // Screen Navigation
    const navigation = useNavigation();

    // API Data
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
      }

      fetchMarketData();
    }, [])

  return (
    
    <KeyboardAvoidingView style={styles.container} behavior='padding' >

      {/* Page Container */}
      <View style={styles.contentContainer}>

          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.navigate("MainDashboard")} style={styles.iconBack}>
                <Icon name="go-back-left-arrow" height={iconHeight} width={iconWidth} color={'#5AAE57'}/>
            </TouchableOpacity>

            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Monthly Portfolio Balance</Text>
                <Text style={styles.cardBalance}>${walletBalance.toLocaleString('en-US', {currency: 'USD'})}</Text>
            </View>

            <View style={styles.chartContainer}>
                {/* Image / Logo */}
                <Image source={require('../src/static-chart.png')} style={styles.chartStatic}/>
            </View>

            <View style={styles.activityContainer}>
                <Text style={styles.monthlyActivity}>Monthly Crypto Prices</Text>
            </View>

            <View style={styles.scrollHeight}>
              <ScrollView style={styles.scroll} showsHorizontalScrollIndicator={false}>
                
                <FlatList style = {styles.listStyle}
                    keyExtractor={(item) => item.id}
                    data={data}
                    renderItem={({item}) => (
                        <ListItem 
                            name={item.name} 
                            symbol={item.symbol} 
                            currentPrice={item.current_price} 
                            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                        />
                    )}

                />

                {/* Bottom List Spacer */}
                <View style={styles.bottomListSpacer}></View>

                {/* END OF FLATLIST */}
              </ScrollView>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentContainer: {
        width: '100%',
      },

      chartContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      headerContainer: {
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 225,
      },

    headerText: {
        fontFamily: 'Inter-Regular',
        fontSize: 24,
        textAlign: 'center',
    },

    chartStatic: {
        width: '100%',
        height: 425,
        padding: 50,

    },

    cardBalance:  {
        fontFamily: 'Inter-SemiBold',
        fontSize: 42,
        textAlign: 'center',
        zIndex: 1,
      }, 

      listStyle: {
          paddingHorizontal: 20,
      },

      iconBack: {
        padding: 14,
        justifyContent: 'center',
        marginLeft: 15,
        zIndex: 1,
      },

      scrollHeight: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
      },

      scroll: {
        width: '100%',
      },

      monthlyActivity: {
          fontFamily: 'Inter-Regular',
          fontSize: 20,
          marginBottom: 0,
      },

      activityContainer: {
        marginLeft: 20 ,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },

      bottomListSpacer: {
        height: 170,
      },

})