import {getProductCategories} from '../services';
import {useEffect, useState} from 'react';
import {useQuery} from 'react-query';

export const useGetProductsCategories = () => {
  const [categories, setCategories] = useState<{id: string; name: string}[]>(
    [],
  );

  const {data, isError, isLoading} = useQuery({
    queryKey: ['getCategories'],
    queryFn: getProductCategories,
  });

  useEffect(() => {
    if (data) {
      const formattedData = data.map((item: {slug: string; name: string}) => ({
        id: item.slug,
        name: item.name,
      }));

      setCategories(data);
    }
  }, [data]);

  return {categories, isError, isLoading};
};
