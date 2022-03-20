import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';


const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d}) => {

    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
    var currentPriceFormat = currentPrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');


  return (
    
    <View>

        <View style={styles.listItemWrap}>

            {/* Card Right Side */}
            <View style={styles.titleWrap}>
                <Text style={styles.title}>{name.toUpperCase()}</Text>
                <Text style={styles.subTitle}>{symbol.toUpperCase()}</Text>
            </View>

            {/* Card Left Side */}
            <View style={styles.rightWrap}>
                <Text style={styles.titleNum}>${currentPriceFormat}</Text>
                <Text style={[styles.subTitleNum, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>


        </View>

    </View>

  )
}

export default ListItem

const styles = StyleSheet.create({

    listItemWrap: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderColor: '#E6E9EC',
        borderWidth: 1,
        borderRadius: 13,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },

    rightWrap: {
        alignItems: 'flex-end',
    },

    title: {
        fontFamily: 'Inter-Light',
        fontSize: 17,
    },
    
    subTitle: {
        color: '#4B4B4B',
        fontFamily: 'Inter-Light',
        fontSize: 12,
        marginTop: 4,
    },

    titleNum: {
        fontFamily: 'Inter-Regular',
        fontSize: 17,
    },

    subTitleNum: {
        color: '#4B4B4B',
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        marginTop: 4,
    },

})