import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


type Props = {
    label: string;
    rating:number;
}
export default function Rating({label, rating}:Props) {
    const stars = [];
    {for(let i=1;i<=5;i++){
        if(i<=rating){
            stars.push(<Ionicons key={i} name="star" color={'rgb(190, 109, 2)'} size={20}/>);
        } else{
            stars.push(<Ionicons key={i} name="star-outline" color={'rgb(190, 109, 2)'} size={20}/>);
        }
    }}
  return (
    <View style={styles.rating}>
        <Text style={styles.subtitle}>{label}</Text>
        <View style={{flexDirection:'row',gap:1, justifyContent:"center"}}>
            {stars}
            {/* <Ionicons name="star" color={'rgb(190, 109, 2)'} size={20}/>
            <Ionicons name="star" color={'rgb(190, 109, 2)'} size={20}/>
            <Ionicons name="star-outline" color={'rgb(190, 109, 2)'} size={20}/> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'rgb(219, 157, 98)',
        fontSize: 15,
        marginBottom: 2,
        width:"100%",
        textAlign:"center",
    },
    rating: {
        // flexDirection:'row',
        marginBottom:10,
    },
})