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
        <View style={styles.image_conatiner}>
            <ImageBackground source={imgSource} imageStyle={styles.image}>
                <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.overlay}>
                    <Text style={styles.text}>{name}</Text>
                </LinearGradient>
                <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.bottomOverlay}>
                    <Text style={styles.cusine}>Indian-Arabic-Chinese</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
        <View style={styles.details}>
            <View style={styles.info}>
                <Text style={styles.text1}>5.0</Text>
                <Ionicons name='star-outline' color={'#EEA734'} size={22}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.text1}>30 mins</Text>
                <Ionicons name='time-outline' color={'#EEA734'} size={24}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.text1}>200</Text>
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
    image_conatiner: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        position:'relative'
    },
    overlay: {
        position:'absolute',
        width:'100%',
        top:0,
        padding: 12,
        borderRadius: 10,
    },
    text: {
        color: 'rgb(231, 226, 226)',
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomOverlay: {
        position:'absolute',
        width:'100%',
        bottom:0,
        right:0,
        padding: 12,
        borderRadius: 10
    },
    cusine: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'right',
    },
    details: {
        flexDirection:'row',
        justifyContent: 'flex-end',
        padding:8,
        gap: 20,
    },
    info: {
        flexDirection: 'row',
        color:'white',
        gap:3
    },
    text1: {
        color: 'rgb(231, 226, 226)',
        fontSize: 18,
        fontWeight: 'bold',
    }
})