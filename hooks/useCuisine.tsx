import { supabase } from '@/utils/supabase';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

type Cuisine = {
  id: string;
  name: string;
  image_url?: string;
};

export default function useCuisine() {
  const [cuisines, setCuisines] = useState<Cuisine[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCuisines = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('Cuisines')
      .select('*');

    if (error) {
      Alert.alert('Error fetching cuisines', error.message);
    } else if (data) {
        console.log(data)
      setCuisines(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCuisines();
  }, []);

  return { cuisines, loading, fetchCuisines };
}
