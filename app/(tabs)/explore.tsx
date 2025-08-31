import Catagory from '@/components/Catagory';
import SearchBar from '@/components/SearchBar';
import useCuisine from '@/hooks/useCuisine';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const image1 = require('@/assets/images/food1.jpg');
const image2 = require('@/assets/images/food2.jpg');
const image3 = require('@/assets/images/food3.jpg');

const data = [
    { key: 'Indian', img: image1 },
    { key: 'Chinese', img: image2 },
    { key: 'Arabian', img: image3 },
    { key: 'Mexican', img: image1 },
    { key: 'Italian', img: image1 },
    { key: 'Thai', img: image1 },
    { key: 'Korean', img: image1 },
    { key: 'Japanese', img: image1 },
    { key: 'South Indian', img: image2 },
    { key: 'North Indian', img: image3 },
    { key: 'Mediterranean', img: image1 },
    { key: 'Greek', img: image2 },
    { key: 'Turkish', img: image1 },
    { key: 'Spanish', img: image3 },
    { key: 'Vietnamese', img: image2 },
    { key: 'French', img: image1 },
    { key: 'Lebanese', img: image3 },
  ];
  

export default function explore() {
  const {cuisines} = useCuisine();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <SearchBar />
        <Text style={styles.subtitle}>Top Catagories</Text>
      </View>
      <FlatList
        data={cuisines}
        keyExtractor={(item) => item.id} 
        numColumns={2}
        renderItem={({ item }) => (
          <Catagory name={item.name} imgSource={item.image_url} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgb(22, 13, 0)',
  },
  header: {
    marginTop:56,
    paddingLeft: 20,
    padding: 10,
    borderRadius:20
  },
  title: {
    color: '#EEA734',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#EEA734',
    fontSize: 20,
    marginTop: 5,
  },
});
