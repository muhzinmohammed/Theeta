import Button from '@/components/Button'
import { AuthContext } from '@/utils/authContext'
import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function profile() {
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.conatiner}>
      <Text>profile</Text>
      <Button name="LogOut" style={styles.button} onPress={authContext.logOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    justifyContent:'center',
    alignItems:'center',
    height:'100%'
  },
  button: {
    backgroundColor:'blue',
    color:'white',
    height:40,
    width:150,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  }
})