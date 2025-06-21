import IconButton from "@/components/IconButton";

import Rating from "@/components/Rating";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const image1 = require('@/assets/images/food1.jpg');
const image2 = require('@/assets/images/food2.jpg');
const image3 = require('@/assets/images/food3.jpg');

const data = [
  { key: 'The Saffron Spoon', img: image1 },
  { key: 'Urban Tandoor', img: image2 },
  { key: 'Fork & Flame', img: image3 },
  { key: 'Miso Hungry', img: image1 },
  { key: 'The Olive Table', img: image1 },
  { key: 'Spice Theory', img: image1 },
  { key: 'Velvet Curry', img: image1 },
  { key: 'Zesty Roots', img: image1 },
  { key: 'Namma Feast', img: image2 },
  { key: 'The Curry Leaf', img: image3 },
  { key: 'Chili & Chaat', img: image1 },
  { key: 'The Golden Grill', img: image2 },
  { key: 'Biryani Junction', img: image1 },
  { key: 'Tangy Tales', img: image3 },
  { key: 'Savory Street', img: image2 },
  { key: 'Tikka Town', img: image1 },
  { key: 'Coastal Cravings', img: image3 },
];

export default function Review() {

  const [image,setImage] = useState<string |undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
      allowsMultipleSelection:true,
      orderedSelection:true,
      selectionLimit:5,
    });

    if (!result.canceled) {
      console.log(result)
      setImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  };

  const [query,setQuery] = useState('');
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header_title}>Add a Review</Text>
            <ScrollView style={styles.form}>
                <View style={styles.image_conatiner}>
                    <ImageBackground source={image? {uri: image}:image1} imageStyle={styles.image}>
                        <View style={styles.title_container}>
                            <IconButton name='add-circle-outline' color='rgb(95, 95, 95)' style={styles.button} onPress={pickImageAsync} />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.rating}>
                  <Rating label="Food"/>
                  <Rating label="Service"/>
                  <Rating label="Ambience"/>
                </View>
                <View style={styles.text_container}>
                  <TextInput 
                    placeholder='Add a review'
                    placeholderTextColor={"#fff"}
                    value={query}
                    onChangeText={setQuery}
                    style={styles.input} />
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgb(22, 13, 0)',
    paddingBottom: 20,
  },
  header: {
    paddingTop: 60,
    backgroundColor:'rgb(41, 26, 4)',
    borderRadius:20,
  },
  header_title: {
    color: 'rgb(190, 109, 2)',
    fontSize: 36,
    marginBottom:5,
    paddingHorizontal:20,
    fontWeight: 'bold',
  },
  title: {
    margin:2,
    paddingHorizontal: 20,
    color: '#EEA734',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'rgb(219, 157, 98)',
    fontSize: 20,
    marginBottom: 10
  },
  form: {
    bottom:0,
    padding:20,
    paddingRight:10,
    marginTop: 5,
    backgroundColor:'rgb(22, 13, 0)',
    borderTopLeftRadius:0,
    borderRadius:20
  },
  rating: {
    margin:20,
  },
  image_conatiner: {
    height:250,
    borderRadius:20,
  },
  image: {
    height:250,
    width:350,
    borderRadius:20,
},
title_container: {
    height:'100%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(0,0,0,0.3)'
  },
  button: {
    height:250,
    width:350,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',

  },
  text_container: {
    flexDirection:'row',
    backgroundColor:"rgb(63, 43, 1)",
    height:150,
    borderRadius:8,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingHorizontal:20,
    gap:5
  },input: {
      color:"#fff",
      width:'100%',
      height:'100%',
      fontSize:16,
      justifyContent:'flex-start'
  }
});
