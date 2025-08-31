import Avatar from "@/components/avatar";
import Card from "@/components/Card";
import Top from "@/components/Top";
import useRestaurants from "@/hooks/useRestaurant";
import { useAuthStore } from "@/utils/authStore";
import { supabase } from "@/utils/supabase";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const image3 = require('@/assets/images/food3.jpg');

export default function Index() {

  const [username, setUsername] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const session = useAuthStore((state) => state.session);

  useEffect(() => {
    if (session) {
      getProfile()
    } else{
      console.log("no session");
    }
  }, [session])
  
  async function getProfile() {
    try {
      if (!session?.user) throw new Error('No user on the session!')
        
        const { data, error, status } = await supabase
        .from('profiles')
        .select(`username,avatar_url`)
        .eq('id', session?.user.id)
        .single()
        if (error && status !== 406) {
          console.log("no data")
          throw error
        }
        
        if (data) {
          console.log(data)
          setUsername(data.username)
          setAvatarUrl(data.avatar_url)
        }
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message)
        }
      } 
    }
    
  const {restaurants} = useRestaurants()

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card 
            id={item.id}
            name={item.name} 
            imgSource={item.image_url} 
            rating={item.rating} 
            wait={item.waiting_time}
            price={item.price_range}
            cusines={item.cusines}
            veg={item.veg} />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.logo}>Theeta</Text>
            <View style={styles.profile}>
              <Link href={{ pathname: "/user/[user]", params: { user: "muhzin" } }}>
                  <Avatar size={40} url={avatarUrl} />
              </Link>
            </View>
            <Text style={styles.title}>Welcome, {username}</Text>
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
        contentContainerStyle={{paddingBottom: 20,}}
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
  header: {
    paddingTop: 60,
    backgroundColor:'rgb(41, 26, 4)',
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
  },
  profile:{
    top:60,
    right:20,
    position:"absolute",
    height:40,
    width:40,
    backgroundColor:'rgb(200,200,200)',
    borderRadius:"50%"
  }
});
