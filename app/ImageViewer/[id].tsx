import { Stack, useLocalSearchParams } from 'expo-router';
import React, { JSX, useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';


const images = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1553621042-f6e147245754",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
];

export default function PinterestGallery() {
  const screenWidth = Dimensions.get('window').width;
  const columnWidth = (screenWidth - 10 * (3)) / 2;
  const {id} = useLocalSearchParams();

  const [imageSizes, setImageSizes] = useState<{ width: number; height: number }[]>([]);

  useEffect(() => {
    images.forEach((uri, index) => {
      Image.getSize(uri, (width, height) => {
        const ratio = columnWidth / width;
        setImageSizes(prev => {
          const newSizes = [...prev];
          newSizes[index] = { width: columnWidth, height: height * ratio };
          return newSizes;
        });
      });
    });
  }, [images]);

  // Split images into 2
  const columnsArray: JSX.Element[][] = Array.from({ length: 2 }, () => []);

  imageSizes.forEach((size, index) => {
    const colIndex = index % 2; // distribute images evenly
    columnsArray[colIndex].push(
      <Image
        key={index}
        source={{ uri: images[index] }}
        style={[styles.image, { width: size.width, height: size.height, marginBottom: 10 }]}
      />
    );
  });

  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerStyle:{
          backgroundColor:'rgb(46, 28, 3)',
        },
        title:"image",
        headerTitleStyle:{
          color:"white"
        },
        headerBackButtonDisplayMode:"minimal",
        }}/>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {columnsArray.map((col, index) => (
            <View key={index} style={{ flex: 1, marginLeft: index === 0 ? 0 : 10 }}>
              {col}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgb(46, 28, 3)',
    paddingBottom: 20,
  },
  image: {
    borderRadius: 10,
    // borderWidth:1,
    // borderColor:"black",
    backgroundColor: '#ccc', // placeholder color while image loads
  },
});
