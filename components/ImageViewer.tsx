import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
    imgSource: ImageSourcePropType;
}
export default function ImageViewer({imgSource}:Props) {
  return (
      <Image source={imgSource} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
    image: {
        height:250,
        width:350,
        borderRadius:30
    }
})