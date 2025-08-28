import Button from '@/components/Button';
import { useAuthStore } from '@/utils/authStore';
import { supabase } from '@/utils/supabase';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function login() {
  const {logIn} = useAuthStore();
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
      logIn();
    }
    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Theeta</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.subtitle}>Log In</Text>
          <View style={styles.input}>
            <TextInput 
                  placeholder='Enter Username'
                  placeholderTextColor={"#fff"}
                  value={email}
                  onChangeText={setEmail}
                  style={styles.textInput} />
            <TextInput 
                  placeholder='Enter Password'
                  placeholderTextColor={"#fff"}
                  value={password}
                  onChangeText={setPassword}
                  style={styles.textInput} />
            <Button name="Login" onPress={signInWithEmail} style={styles.button}/>
            <View style={styles.content}>
              <Text style={styles.h3}>New to THEETA? 
              <Link href="/create_account" style={styles.h3}>create account</Link>
              </Text>
            </View>
            
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
  content: {
    paddingBottom: 20,
    height:'100%',
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
  title: {
    margin:2,
    paddingHorizontal: 20,
    color: '#EEA734',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'rgb(219, 157, 98)',
    fontSize: 32,
  },
  h3: {
    color: 'rgb(219, 157, 98)',
    fontSize: 15,
  },
  ex_container: {
    bottom:0,
    padding:20,
    paddingRight:10,
    marginTop: 5,
    backgroundColor:'rgb(22, 13, 0)',
    borderTopLeftRadius:0,
    borderRadius:20
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
  textInput:{
    backgroundColor: 'rgb(190, 109, 2)',
    color:'white',
    height:45,
    width:300,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:15
  }
})