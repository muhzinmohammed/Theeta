import Food from "@/components/Food";
import IconButton from "@/components/IconButton";
import { supabase } from "@/utils/supabase";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const image1 = require('@/assets/images/food1.jpg');

type Food = {
  id: string;
  name: string;
  rest_name: string;
  price: number;
  description: string;
  image_url: string;
  available:boolean;
  rating: number;
  veg:boolean;
  halal:boolean;
  dairy:boolean;
  cooking_time: number;
  cusine: number;
};

export default function FoodPage() {
  const {id} = useLocalSearchParams();
  const [food, setFood] = useState<Food>({
    id: '',
    name: '',
    rest_name: '',
    price: 0,
    description: '',
    image_url: '',
    available: false,
    rating: 0,
    veg: false,
    halal: false,
    dairy: false,
    cooking_time: 0,
    cusine: 0,
  });

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    const { data, error } = await supabase
      .from('Foods')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      Alert.alert('Error fetching Food', error.message);
    } else if (data) {
      setFood(data);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <ImageBackground source={{uri:food?.image_url}} imageStyle={styles.image}>
          <LinearGradient colors={['rgb(0, 0, 0)', 'rgba(0, 0, 0, 0)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.overlay}>
            <View style={{flexDirection:"row",alignContent:"center"}}>
              <IconButton name='arrow-back-outline' color="white" onPress={router.back} style={{marginTop:35}} size={30}/>
              <View >
                <Text style={[styles.text,{paddingTop:40}]}>{food? food.name:"no rest"}</Text> 
                <Text style={styles.subtext}>from {food? food.rest_name:"no rest"}</Text>
              </View>
              <View style={[{flex:1,flexDirection:"row",marginTop:40,justifyContent:"flex-end"}]}>
                <Text style={[styles.text,{paddingTop:0}]}>₹ {food.price}</Text>
              </View>
            </View>
            <View style={styles.imageButton}>
              <Link href={{ pathname: "/ImageViewer/[id]", params: { id: food? food.id:1 } }} >
                <Ionicons name={"chevron-forward-outline"} color="white" size={30} /> 
              </Link>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.masonry}>
        <View style={[styles.container2,{width:"100%"}]}>
          <Text style={{color:"rgb(252, 225, 151)",paddingLeft:5}}>{food?.description}</Text>
        </View>
        <View style={{width:150}}>
            <View style={styles.container2}>
                <Text style={styles.text2}>
                    {food?.rating}<Ionicons name="star" color="rgb(204, 204, 204)" size={18}/>
                </Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text2}>360 cal</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text2}>
                    {food?.cooking_time}<Ionicons name="alarm-outline" color="rgb(204, 204, 204)" size={18}/>
                </Text>
            </View>
            {food.veg? <View style={styles.container2}>
                <Text style={styles.text2}>
                    Veg <Ionicons name="ellipse" color="rgb(18, 235, 47)" size={18}/>
                </Text>
            </View>:null}
            {food.halal? <View style={styles.container2}>
                <Text style={styles.text2}>
                    Halal <Ionicons name="checkmark-circle-outline" color="rgb(18, 235, 47)" size={18}/>
                </Text>
            </View>:null}
            {food.dairy? <View style={styles.container2}>
                <Text style={styles.text2}>
                    Contains Milk<Ionicons name="water-outline" color="rgb(18, 235, 47)" size={18}/>
                </Text>
            </View>:null}
        </View>
        <View>
            <View style={[styles.container3,{backgroundColor:'rgba(255, 33, 33, 0.83)',}]}>
                <Text style={styles.text}>Order on Zomato</Text>
            </View>
            <View style={[styles.container3,{backgroundColor:'rgba(255, 81, 0, 0.83)',}]}>
                <Text style={styles.text}>Order on Swiggy</Text>
            </View>
            <View style={[styles.container3,{backgroundColor:'rgba(0, 110, 255, 0.83)',}]}>
                <Text style={styles.text}>Order on Other</Text>
            </View>
        </View>
        <Text style={styles.text}>Ingredients:</Text>
        <View style={styles.container2}>
            <Text style={styles.text2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi temporibus expedita dolores ut, laudantium et est molestias exercitationem incidunt qui ad porro! Deserunt corrupti eaque, ut dolorum pariatur facere labore?
            </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius:20,
  },
  container: {
    flex:1,
    flexWrap:"wrap",
    flexDirection:"column",
    backgroundColor:'rgb(22, 13, 0)',
    paddingBottom: 40,
  },
  container1: {
    height:250,
    borderRadius:20,
    marginBottom:30,
  },
  image: {
    height:250,
    borderRadius:20,
  },
  overlay: {
    position:'absolute',
    height:200,
    width:'100%',
    padding: 10,
  },
  text: {
      color: 'rgb(231, 226, 226)',
      fontSize: 24,
      fontWeight: 'bold',
    //   paddingTop:20,
      alignItems:"center"
  },
  text2: {
      color: 'rgb(231, 226, 226)',
      fontSize: 17,
      fontWeight: 'bold',
      // paddingTop:40,
  },
  subtext: {
      color: 'rgb(231, 226, 226)',
      fontSize: 9,
  },
  masonry:{
    flexDirection: 'row',   // arrange in rows
    flexWrap: 'wrap',       // allow wrapping to next line
    justifyContent:'flex-start',
    gap: 10,
    padding:10   
  },
  container2:{
    // height:200,
    borderRadius:20,
    backgroundColor:'rgb(41, 26, 4)',
    marginVertical:5,
    // marginHorizontal:2,
    padding:10,
    textAlign:"justify",
  },
  container3:{
    height:80,
    borderRadius:20,
    // backgroundColor:'rgb(41, 26, 4)',
    marginVertical:5,
    // marginHorizontal:2,
    padding:10,
    textAlign:"justify",
  },
  rating: {
    // margin:20,
    // marginLeft:100
  },
  text_container: {
    flexDirection:'row',
    backgroundColor:"rgb(63, 43, 1)",
    height:150,
    borderRadius:8,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingHorizontal:20,
    gap:5
  },
  input: {
    color:"#fff",
    width:'100%',
    height:'100%',
    fontSize:16,
    justifyContent:'flex-start'
  },
  imageButton:{
    flex:1,
    alignItems:"flex-end",
    justifyContent:"center"
  }
});
