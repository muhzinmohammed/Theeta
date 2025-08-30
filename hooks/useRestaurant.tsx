import { supabase } from '@/utils/supabase';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

type Restaurant = {
  id: string;
  name: string;
  rating?: number;
  address: string;
  image_url?: string;
  waiting_time?: number;
  price_range?: number;
  cusines: string[];
  veg:boolean;
};

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
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
