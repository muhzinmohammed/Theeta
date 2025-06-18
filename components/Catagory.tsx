import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type Props = {
    name: String;
    imgSource: ImageSourcePropType;
}
export default function Catagory({name,imgSource}:Props) {
  return (
    <View style={styles.container}>
        <View style={styles.image_conatiner}>
            <ImageBackground source={imgSource} imageStyle={styles.image}>
                <View style={styles.overlay}>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </ImageBackground>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'50%',
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
        position:'relative',
        justifyContent:'center',
        alignItems:'center'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 10,
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        position:'absolute',
        color: 'rgb(231, 226, 226)',
        fontSize: 24,
        fontWeight: 'regular',
    },
})