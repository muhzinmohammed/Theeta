import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '@/utils/authContext'
import Button from '@/components/Button';
import { TextInput } from 'react-native-gesture-handler';
import { GoogleSignin } from 'react-native-google-signin';


export default function login() {
  const authContext = useContext(AuthContext);
  const [username,setUserName] = useState<string>("");
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
                  value={username}
                  onChangeText={setUserName}
                  style={styles.textInput} />
            <TextInput 
                  placeholder='Enter Password'
                  placeholderTextColor={"#fff"}
                  value={username}
                  onChangeText={setUserName}
                  style={styles.textInput} />
            <Button name="Login" onPress={authContext.logIn} style={styles.button}/>
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