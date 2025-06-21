import Button from '@/components/Button';
import { AuthContext } from '@/utils/authContext';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function profile() {
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.conatiner}>
      <Text style={styles.subtitle}>profile</Text>
      <Button name="LogOut" style={styles.button} onPress={authContext.logOut}/>
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
})