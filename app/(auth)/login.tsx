import Button from '@/components/Button';
import { useAuthStore } from '@/utils/authStore';
import { supabase } from '@/utils/supabase';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert, AppState, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true)
    const { error, data:{session} } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if(session){
      useAuthStore.getState().setSession(session)
      console.log("logged in")
    }
    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Theeta</Text>
      </View>
      <View style={styles.form}>
        <Text style={{color: 'rgb(219, 157, 98)',fontSize: 32}}>Log In</Text>
        <View style={styles.input}>
          <TextInput 
                placeholder='Enter Username'
                placeholderTextColor={"#fff"}
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none' 
                style={styles.textInput}
                keyboardType='email-address'
          />
          <TextInput 
                placeholder='Enter Password'
                placeholderTextColor={"#fff"}
                value={password}
                onChangeText={setPassword}
                style={styles.textInput}
                secureTextEntry
                autoCapitalize='none' 
          />
          <Button name="Login" onPress={loading? undefined:signInWithEmail} style={[styles.button, loading? {color:'white'}:{ color:'rgb(180, 180, 180)'}]}/>
          <View style={{alignItems:"center"}}>
            <Text style={{color: 'rgb(219, 157, 98)',fontSize: 15,}}>New to Theeta? 
              <Link href="/create_account" style={{color: 'rgb(238, 145, 59)',fontSize: 17,textDecorationLine:"underline"}} replace>Create Account</Link>
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgb(22, 13, 0)',
  },
  header: {
    paddingTop: 60,
    backgroundColor:'rgb(41, 26, 4)',
    borderRadius:20,
    borderBottomLeftRadius:0,
    height:'20%'
  },
  logo: {
    color: 'rgb(190, 109, 2)',
    fontSize: 36,
    marginBottom:5,
    paddingHorizontal:35,
    paddingVertical:30,
    fontWeight: 'bold',
  },
  form: {
    backgroundColor:'rgb(41, 26, 4)',
    paddingVertical: 40,
    alignItems:'center',
    height:'100%',
    marginLeft:20,
    marginTop:80,
    borderRadius:20,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
  },
  input: {
    marginTop:60,
    gap:15,
  },
  textInput:{
    backgroundColor: 'rgb(190, 109, 2)',
    color:'white',
    height:45,
    width:300,
    borderRadius:7,
    paddingHorizontal:15
  },
  button: {
    backgroundColor: 'rgb(190, 109, 2)',
    height:45,
    width:250,
    borderRadius:18,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  }
})