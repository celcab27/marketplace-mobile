import {useEffect, useState} from 'react';
import {getProducts} from '../services';
import {useQuery} from 'react-query';
import {ItemI} from '../interfaces';

export const useGetProducts = () => {
  const [products, setProducts] = useState<ItemI[]>([]);

  const {data, error, isLoading} = useQuery({
    queryKey: ['getProducts'],
    queryFn: getProducts,
  });

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return {products, error, isLoading};
};
