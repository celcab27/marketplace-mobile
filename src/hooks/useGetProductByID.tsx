import {getProductByID} from '../services';
import {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {ItemI} from '../interfaces';

export const useGetProductByID = (id: string) => {
  const [product, setCategories] = useState<ItemI>();

  const {data, isError, isLoading} = useQuery({
    queryKey: ['getProductByID', id],
    queryFn: () => getProductByID(id),
  });

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  return {product, isError, isLoading};
};
