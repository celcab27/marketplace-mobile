import {useEffect, useState} from 'react';
import {getProducts} from '../services';
import {useQuery} from 'react-query';
import {ItemI, ORDER_BY, ORDER_TYPE} from '../interfaces';

export const useGetProducts = ({
  category,
  orderOption,
}: {
  category: string;
  orderOption?: string;
}) => {
  const [products, setProducts] = useState<ItemI[]>([]);
  let orderBy: ORDER_BY;
  let orderType: ORDER_TYPE;

  if (orderOption) {
    const parts = orderOption.split('-');
    orderType = parts[0] as ORDER_TYPE;
    orderBy = parts[1] as ORDER_BY;
  }

  const {data, isError, isLoading} = useQuery({
    queryKey: ['getProducts', category, orderOption],
    queryFn: () => getProducts({category, orderBy, orderType}),
  });

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return {products, isError, isLoading};
};
