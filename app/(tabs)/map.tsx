import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';


const INITIAL_REGION = {
  latitude: 8.894791,
  longitude: 76.614929,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.map_container}>
        <MapView 
          style={styles.map}  
          initialRegion={INITIAL_REGION} 
          mapType='mutedStandard'
          followsUserLocation={true}
          showsUserLocation={true}
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>Explore restraunts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map_container: {
    height:'100%'
  },
  text_container: {
    position:'absolute',
    marginTop:370,
    width:'100%',
    alignItems:'center',
    height:'100%',
    backgroundColor:'rgba(22, 22, 22, 0.9)',
    borderRadius:20
  },
  text: {
    color:'#fff',
    fontSize:30
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
