import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#EEA734',
            tabBarStyle: {
                backgroundColor:'rgb(22, 13, 0)',
                borderTopColor:"#000",
                paddingTop:5
            },
            headerShown: false
            }}>
            <Tabs.Screen name="index" options={{title: "Home",tabBarIcon: ({color,focused}) => (
                <Ionicons name={focused? 'restaurant':'restaurant-outline'} color={color} size={24} />
            )}} />
            <Tabs.Screen name="explore" options={{title: "Explore",tabBarIcon: ({color,focused}) => (
                <Ionicons name={focused? 'search':'search-outline'} color={color} size={24} />
            )}} />
            <Tabs.Screen name="review" options={{title: "Add",tabBarIcon: ({color,focused}) => (
                <Ionicons name={focused? 'add-circle':'add-circle-outline'} color={color} size={24} />
            )}} />
            <Tabs.Screen name="map" options={{title: "Map",tabBarIcon: ({color,focused}) => (
                <Ionicons name={focused? 'location':'location-outline'} color={color} size={24} />
            )}} />
        </Tabs>
    )
}
