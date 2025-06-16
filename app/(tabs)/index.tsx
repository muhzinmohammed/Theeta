import Card from "@/components/Card";
import { FlatList, StyleSheet, Text, View } from "react-native";

const image1 = require('@/assets/images/food1.jpg');
const image2 = require('@/assets/images/food2.jpg');
const image3 = require('@/assets/images/food3.jpg');

const data = [
  { key: 'The Saffron Spoon', img: image1 },
  { key: 'Urban Tandoor', img: image2 },
  { key: 'Fork & Flame', img: image3 },
  { key: 'Miso Hungry', img: image1 },
  { key: 'The Olive Table', img: image1 },
  { key: 'Spice Theory', img: image1 },
  { key: 'Velvet Curry', img: image1 },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Card name={item.key} imgSource={item.img} />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Welcome, Muhzin</Text>
            <Text style={styles.subtitle}>Top Picks For You</Text>
          </View>
        }
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    paddingTop: 80,
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {
    color: '#EEA734',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#EEA734',
    fontSize: 20,
    marginTop: 5,
  },
});
