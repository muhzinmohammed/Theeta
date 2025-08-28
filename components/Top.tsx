import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type Props = {
    food: string;
    name: string;
    imgSource: ImageSourcePropType;
}
export default function Top({food,name,imgSource}:Props) {
  return (
    <View style={styles.container}>
        <Link href={{ pathname: "/details/[restaurant]", params: { restaurant: name } }}>
            <View style={styles.image_conatiner}>
                <ImageBackground source={imgSource} imageStyle={styles.image}>
                    <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.overlay}>
                        <Text style={styles.text}>{food}</Text>
                    </LinearGradient>
                    <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0)']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        style={styles.bottomOverlay}>
                        <Text style={styles.name}>{name}</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        </Link>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width:180,
        height: 180,
        padding:15,
    },
    image_conatiner: {
        width: '100%',
        height: 180,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        position:'relative',
    },
    overlay: {
        position:'absolute',
        width:'100%',
        top:0,
        padding: 12,
        borderRadius: 20,
    },
    text: {
        color: 'rgb(209, 209, 209)',
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomOverlay: {
        position:'absolute',
        width:'100%',
        bottom:0,
        right:0,
        padding: 12,
        borderRadius: 20
    },
    text1: {
        color: 'rgb(231, 20, 20)',
        fontSize: 18,
        fontWeight: 'bold',
    },
    name:{
        fontSize:16,
        color:'rgb(196, 163, 94)',
    }
})