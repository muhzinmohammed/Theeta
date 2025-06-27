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
              <Text style={styles.subtitle}>New In Town</Text>
              <ScrollView horizontal >
                <Top food={'Kunafa'}  name={"fadwa sweets"} imgSource={image3} />
                <Top food={'Tikka Town'} name={"fadwa sweets"} imgSource={image3} />
                <Top food={'Tikka Town'} name={"fadwa sweets"} imgSource={image3} />
                <Top food={'Tikka Town'} name={"fadwa sweets"} imgSource={image3} />
                <Top food={'Tikka Town'} name={"fadwa sweets"} imgSource={image3} />
                <Top food={'Tikka Town'} name={"fadwa sweets"} imgSource={image3} />
              </ScrollView>
              <Text style={styles.subtitle}>Top Picks For You</Text>
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
    flex:1,
    backgroundColor:'rgb(22, 13, 0)',
  },
  content: {
    paddingBottom: 20,

  },
  header: {
    paddingTop: 60,
    backgroundColor:'rgb(41, 26, 4)',
    borderRadius:20,
  },
  logo: {
    color: 'rgb(190, 109, 2)',
    fontSize: 36,
    marginBottom:5,
    paddingHorizontal:20,
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
    fontSize: 20,
  },
  ex_container: {
    bottom:0,
    padding:20,
    paddingRight:10,
    marginTop: 5,
    backgroundColor:'rgb(22, 13, 0)',
    borderTopLeftRadius:0,
    borderRadius:20
  }
});
