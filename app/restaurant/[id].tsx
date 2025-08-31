import Food from "@/components/Food";
import IconButton from "@/components/IconButton";
import Rating from "@/components/Rating";
import { supabase } from "@/utils/supabase";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const image1 = require('@/assets/images/food1.jpg');

type Restaurant = {
  id: string;
  name: string;
  rating: number;
  address: string;
  image_url: string;
  waiting_time: number;
  price_range: number;
  veg:boolean;
  food_rating: number;
  ambience: number;
  service: number;
  description: string;
};

type Food = {
  id: string;
  name: string;
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

export default function Restraunt() {
  const {id} = useLocalSearchParams();
  const [restaurant, setRestaurant] = useState<Restaurant>({
    id: '',
    name: '',
    rating: 0,
    address: '',
    image_url: '',
    waiting_time: 0,
    price_range: 0,
    veg: false,
    food_rating: 0,
    ambience: 0,
    service: 0,
    description: '',
  });
  const [foods, setFoods] = useState<Food[]>([]);
  
  
  const [query,setQuery] = useState('');

  useEffect(() => {
    fetchRestaurant();
    fetchFoods();
  }, []);

  const fetchRestaurant = async () => {
    const { data, error } = await supabase
      .from('Restaurants')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      Alert.alert('Error fetching restaurants', error.message);
    } else if (data) {
      setRestaurant(data);
    }
  };
  
  const fetchFoods = async () => {
    const { data, error } = await supabase
      .from('food')
      .select('*')
      .eq('rest_id', id);

    if (error) {
      Alert.alert('Error fetching restaurants', error.message);
    } else if (data) {
      console.log(data)
      setFoods(data);
    }
  };

  const mapRef = useRef(null);
  const INITIAL_REGION = {
    latitude: 8.894791,
    longitude: 76.614929,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <ImageBackground source={{uri:restaurant?.image_url}} imageStyle={styles.image}>
          <LinearGradient colors={['rgb(0, 0, 0)', 'rgba(0, 0, 0, 0)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.overlay}>
            <View style={{flexDirection:"row",alignContent:"center"}}>
              <IconButton name='arrow-back-outline' color="white" onPress={router.back} style={{marginTop:35}} size={30}/>
              <View >
                <Text style={styles.text}>{restaurant? restaurant.name:"no rest"}</Text> 
                <Text style={styles.subtext}>{restaurant? restaurant.address:"no rest"}</Text>
              </View>
              <View style={{flex:1,flexDirection:"row",marginTop:40,justifyContent:"flex-end",paddingRight:10}}>
                <Ionicons name="star" color="rgb(204, 204, 204)" size={24}/>
                <Text style={[styles.text,{paddingTop:0}]}>{restaurant?.rating}</Text>
              </View>
            </View>
            <View style={styles.imageButton}>
              <Link href={{ pathname: "/ImageViewer/[id]", params: { id: restaurant? restaurant.id:1 } }} >
                <Ionicons name={"chevron-forward-outline"} color="white" size={30} /> 
              </Link>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.masonry}>
        <View style={[styles.container2,{width:"54%",}]}>
          <Text style={{color:"rgb(252, 225, 151)",paddingLeft:5}}>{restaurant?.description}</Text>
        </View>
        <View style={[styles.container2,{width:"40%",}]}>
          <Rating label="Food" rating={restaurant?.food_rating}/>
          <Rating label="Service" rating={restaurant?.service}/>
          <Rating label="Ambience" rating={restaurant?.ambience}/>
        </View>
        <View style={[styles.container2,{width:"70%",height:180}]}>
          <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
        />
        </View>
        <View style={[styles.container2,{width:"25%"}]}>

          <Link href={{ pathname: "/review/[id]", params: { id: restaurant? restaurant.id:1}}} style={[styles.text,{ transform: [{ rotate: "90deg" }],width:100,marginTop:25,textAlign:"center"}]}>Reviews</Link>
        </View>
        <View >
          <Text style={[styles.text,{marginLeft:10}]}>Menu</Text>
          {foods.map((food,index) => (<Food 
          key={index} 
          id={food.id} 
          name={food.name}
          price={food.price}
          description={food.description}
          image_url={food.image_url}
          available={food.available}
          rating={food.rating}
          veg={food.veg}
          halal={food.halal}
          dairy={food.dairy}
          cooking_time={food.cooking_time}
          cusine={food.cusine}
           />))}
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
      paddingTop:40,
  },
  subtext: {
      color: 'rgb(231, 226, 226)',
      fontSize: 9,
  },
  masonry:{
    flexDirection: 'row',   // arrange in rows
    flexWrap: 'wrap',       // allow wrapping to next line
    justifyContent: 'space-between',
    gap: 10,
    padding:10   
  },
  container2:{
    // height:200,
    borderRadius:20,
    backgroundColor:'rgb(41, 26, 4)',
    marginVertical:5,
    marginHorizontal:2,
    padding:15,
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
