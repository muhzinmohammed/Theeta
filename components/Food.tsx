import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

type Props = {
    id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  available:boolean;
  rating: number;
  veg:boolean;
  halal:boolean;
  dairy:boolean;
  cooking_time: number;
  cusine: number;
}

export default function Food({id,name,image_url,rating, cooking_time,price,cusine,veg,description}:Props) {
  return (
    <View style={styles.container}>
        <Link href={{ pathname: "/food/[id]", params: { id: id } }}>
            <View style={[styles.container1,{width:"50%"}]}>
                <ImageBackground source={{uri: image_url}} imageStyle={styles.image}>
                </ImageBackground>
            </View>
            <View style={[styles.container1,{width:"48%",padding:10,justifyContent:"flex-start",flex:1}]}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={styles.text}>{name}</Text>
                    {veg? <View style={styles.veg}></View>:null}
                </View>
                <Text style={{color:"rgb(255, 180, 83)",fontSize:12,paddingVertical:8}}>{description}</Text>
                <View style={styles.details}>
                    <View style={{width:"100%"}}>
                        <Text style={styles.text1}>₹ {price}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text2}>{rating}</Text>
                        <Ionicons name='star' color={'#EEA734'} size={15}/>
                        <Text style={styles.text2}>{cooking_time} mins</Text>
                        <Ionicons name='time-outline' color={'#EEA734'} size={18}/>
                    </View>
                </View>
            </View>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        width:'100%',
        height: 170,
        marginVertical:10,
        padding:10,
        backgroundColor:'rgb(41, 26, 4)',
        borderRadius:20
    },
    container1: {
        margin:10,
        height: 150,
        borderRadius: 10,
        // borderColor:"white",
        // borderWidth:1
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        position:'relative'
    },
    overlay: {
        position:'absolute',
        // width:150,
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
        width:150,
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
        width:"100%",
        padding:8,
        gap: 8,
        // borderColor:"white",
        // borderWidth:1
    },
    info: {
        flexDirection: 'row',
        justifyContent:"flex-end",
        color:'white',
        gap:3
    },
    text1: {
        color: 'rgb(231, 226, 226)',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:"right"
    },
    text2: {
        color: 'rgb(231, 226, 226)',
        fontSize: 15,
        fontWeight: 'bold',
    },
    veg:{
        backgroundColor:'rgb(25, 151, 0)',
        top:5,
        right:0,
        height:15,
        width:15,
        borderRadius:"50%",
    }
})