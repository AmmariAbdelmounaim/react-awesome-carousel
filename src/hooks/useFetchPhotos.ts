import { useState, useEffect } from 'react';
import { photoType } from '../utils/types';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState<photoType[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.slingacademy.com/v1/sample-data/photos'
        );
        const result = await response.json();
        setPhotos(result.photos);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { photos, loading };
}
