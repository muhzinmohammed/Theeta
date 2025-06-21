import MapCard from '@/components/MapCard';
import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, ImageSourcePropType, PanResponder, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const INITIAL_REGION = {
  latitude: 8.894791,
  longitude: 76.614929,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

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

export default function Map() {
  const mapRef = useRef(null);
  const [search, setSearch] = useState('');

  // Bottom sheet animation
  const sheetHeight = height * 0.85;
  const collapsedY = height - 180;
  const expandedY = height - sheetHeight;
  const animatedY = useRef(new Animated.Value(collapsedY)).current;
  const [expanded, setExpanded] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 10,
      onPanResponderMove: (_, gestureState) => {
        let newY = (expanded ? expandedY : collapsedY) + gestureState.dy;
        newY = Math.max(Math.min(newY, collapsedY), expandedY);
        animatedY.setValue(newY);
      },
      onPanResponderRelease: (_, gestureState) => {
        animatedY.flattenOffset();
        animatedY.stopAnimation((currentValue) => {
          const midpoint = (collapsedY + expandedY) / 2;
          if (currentValue < midpoint) {
            expandSheet();
          } else {
            collapseSheet();
          }
        });
      },
    })
  ).current;

  const expandSheet = () => {
    setExpanded(true);
    Animated.spring(animatedY, {
      toValue: expandedY,
      useNativeDriver: false,
    }).start();
  };
  const collapseSheet = () => {
    setExpanded(false);
    Animated.spring(animatedY, {
      toValue: collapsedY,
      useNativeDriver: false,
    }).start();
  };

  // Card for vertical list (expanded)
  const renderVerticalCard = ({ item }: { item: { key: string; img: ImageSourcePropType } }) => (
    <View style={styles.verticalCard}>
      <MapCard name={item.key} imgSource={item.img} />
    </View>
  );

  // Only show a few cards when collapsed
  const visibleData = expanded ? data : data.slice(0, 3);

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      />

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#fff" style={{ marginLeft: 10 }} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search on Theeta"
          placeholderTextColor="#fff"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Expandable Bottom Sheet */}
      <Animated.View
        style={[
          styles.bottomSheet,
          { top: animatedY, height: sheetHeight },
        ]}
      >
        <View
          style={styles.sheetHandle}
          {...panResponder.panHandlers}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={expanded ? collapseSheet : expandSheet}
          >
            <View style={styles.handleBar} />
          </TouchableOpacity>
        </View>
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Restaurants near you</Text>
          <FlatList
            data={visibleData}
            keyExtractor={(item) => item.key}
            renderItem={renderVerticalCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 4 }}
            style={{ marginTop: 10 }}
          />
        </View>
      </Animated.View>
      {/* Optional: darken background when expanded */}
      {expanded && (
        <TouchableWithoutFeedback onPress={collapseSheet}>
          <View style={styles.overlay} pointerEvents="auto" />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(63, 43, 1)',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 44,
    zIndex: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: '#fff',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    width: '100%',
    backgroundColor:'rgba(22, 13, 0,0.9)',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    elevation: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    zIndex: 20,
    paddingBottom: 24,
  },
  sheetHandle: {
    alignItems: 'center',
    paddingVertical: 24,
    minHeight: 48,
  },
  handleBar: {
    width: 100,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginBottom: 6,
  },
  sheetContent: {
    paddingTop: 4,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'rgb(190, 109, 2)',
    marginLeft: 16,
    marginTop: 4,
  },
  verticalCard: {
    flex: 1,
    margin: 6,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.18)',
    zIndex: 15,
  },
});
