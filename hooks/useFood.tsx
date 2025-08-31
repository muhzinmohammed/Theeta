import { supabase } from '@/utils/supabase';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

type Food = {
  id: string;
  name: string;
  rest_id:string;
  price?: number;
  rest_name: string;
  description: string;
  image_url?: string;
  available:boolean;
  rating?: number;
  veg:boolean;
  halal:boolean;
  dairy:boolean;
  cooking_time?: number;
  cusine: string;
};

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Food[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRestaurants = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('Restaurants')
      .select('*');

    if (error) {
      Alert.alert('Error fetching restaurants', error.message);
    } else if (data) {
      setRestaurants(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return { restaurants, loading, fetchRestaurants };
}
