import Button from '@/components/Button';
import { useAuthStore } from '@/utils/authStore';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const image2 = require('@/assets/images/food2.jpg');

export default function profile() {
  const {logOut} = useAuthStore();
  return (
    <View style={styles.conatiner}>
      <Text style={styles.subtitle}>profile</Text>
      <Image source={image2} style={styles.image} />
      <Button name="LogOut" style={styles.button} onPress={logOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor:'rgb(22, 13, 0)',
    justifyContent:'center',
    alignItems:'center',
    height:'100%'
  },
  subtitle: {
    color: 'rgb(219, 157, 98)',
    fontSize: 32,
  },
  button: {
    backgroundColor: 'rgb(190, 109, 2)',
    color:'white',
    height:45,
    width:250,
    borderRadius:18,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  },
  image: {
    height:200,
    width:200,
    borderRadius:'50%'
  }
})