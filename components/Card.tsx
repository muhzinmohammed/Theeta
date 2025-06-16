import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type Props = {
    name: String;
    imgSource: ImageSourcePropType;
}
export default function Card({name,imgSource}:Props) {
  return (
    <View style={styles.container}>
        <View style={styles.image}>
            <ImageBackground source={imgSource} imageStyle={styles.image}>
                <LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.overlay}>
                    <Text style={styles.text}>{name}</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
        <View style={styles.details}>
            <View style={styles.info}>
                <Text style={styles.text}>5.0</Text>
                <Ionicons name='star-outline' color={'#EEA734'} size={24}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>30 mins</Text>
                <Ionicons name='time-outline' color={'#EEA734'} size={24}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>200</Text>
                <Ionicons name='pricetags-outline' color={'#EEA734'} size={24}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 250,
        padding:15,

    },
    details: {
        color: '#fff',
        flexDirection:'row',
        justifyContent: 'flex-end',
        fontSize: 22,
        padding:8,
        gap: 20
    },
    info: {
        flexDirection: 'row',
        color:'white'
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10
    },
    overlay: {
        padding: 12,
        borderRadius: 10
    },
    text: {
    color: 'rgb(255, 255, 255)',
    fontSize: 20,
    fontWeight: 'bold',
    },
})