import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


type Props = {
    label: string;
}
export default function Rating({label}:Props) {
  return (
    <View style={styles.rating}>
        <Text style={styles.subtitle}>{label}</Text>
        <View style={{flexDirection:'row',gap:5}}>
            <Ionicons name="star" color={'rgb(190, 109, 2)'} size={24}/>
            <Ionicons name="star" color={'rgb(190, 109, 2)'} size={24}/>
            <Ionicons name="star" color={'rgb(190, 109, 2)'} size={24}/>
            <Ionicons name="star-outline" color={'rgb(190, 109, 2)'} size={24}/>
            <Ionicons name="star-outline" color={'rgb(190, 109, 2)'} size={24}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'rgb(219, 157, 98)',
        fontSize: 20,
        marginBottom: 10,
        width:100
    },
    rating: {
        flexDirection:'row',
        margin:8,
        gap:20
    },
})