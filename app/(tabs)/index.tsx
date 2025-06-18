import Card from "@/components/Card";
import Top from "@/components/Top";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
  { key: 'Zesty Roots', img: image1 },
  { key: 'Namma Feast', img: image2 },
  { key: 'The Curry Leaf', img: image3 },
  { key: 'Chili & Chaat', img: image1 },
  { key: 'The Golden Grill', img: image2 },
  { key: 'Biryani Junction', img: image1 },
  { key: 'Tangy Tales', img: image3 },
  { key: 'Savory Street', img: image2 },
  { key: 'Tikka Town', img: image1 },
  { key: 'Coastal Cravings', img: image3 },
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
            <Text style={styles.logo}>Theeta</Text>
            <Text style={styles.title}>Welcome, Muhzin</Text>
            <View style={styles.ex_container}>
              <Text style={styles.subtitle}>Top Picks For You</Text>
              <ScrollView horizontal >
                <Top name={'Tikka Town'} imgSource={image3} />
                <Top name={'Tikka Town'} imgSource={image3} />
                <Top name={'Tikka Town'} imgSource={image3} />
                <Top name={'Tikka Town'} imgSource={image3} />
                <Top name={'Tikka Town'} imgSource={image3} />
                <Top name={'Tikka Town'} imgSource={image3} />
              </ScrollView>
            </View>
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
    paddingBottom: 20,
  },
  header: {
    paddingTop: 60,
    height:350,
    backgroundColor:'rgb(41, 26, 4)',
    borderRadius:20
  },
  logo: {
    paddingHorizontal: 20,
    color: '#EEA734',
    fontSize: 32,
    marginBottom:5,
    fontWeight: 'bold',
  },
  title: {
    paddingHorizontal: 20,
    color: '#EEA734',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#EEA734',
    fontSize: 20,
  },
  ex_container: {
    bottom:0,
    padding:20,
    paddingRight:10,
    position:'absolute',
    marginTop: 5,
    height:200,
    backgroundColor:'rgb(22, 13, 0)',
    borderTopLeftRadius:0,
    borderRadius:20
  }
});
