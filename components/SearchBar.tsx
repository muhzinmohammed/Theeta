import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
    const [query,setQuery] = useState('');
  return (
    <View style={styles.container}>
        <Ionicons name='search' color={"#fff"} size={18}/>
        <TextInput 
            placeholder='Search on Theeta'
            placeholderTextColor={"#fff"}
            value={query}
            onChangeText={setQuery}
            style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:"rgb(63, 43, 1)",
        height:50,
        borderRadius:8,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:20,
        marginVertical:15,
        gap:5
    },input: {
        color:"#fff",
        width:'100%',
        height:'100%',
        fontSize:16,
    }
})