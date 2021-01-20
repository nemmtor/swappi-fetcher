import { useState, useEffect } from 'react';
import { SwapiResJson, fetchSwapiOrReject } from '../utils';

interface Output {
  data?: SwapiResJson;
  error?: string;
  isLoading: boolean;
}

export const useSwapiFetch = (id = '1'): Output => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<SwapiResJson>();
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const responseJson = await fetchSwapiOrReject(id);
        setData(responseJson);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [id]);

  return { isLoading, data, error };
};
