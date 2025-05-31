import axios from 'axios';
import {ORDER_BY, ORDER_TYPE} from '../interfaces';

export const getProducts = async ({
  category,
  orderBy,
  orderType,
}: {
  category: string;
  orderBy?: ORDER_BY;
  orderType?: ORDER_TYPE;
}) => {
  const response = await axios.get(
    `https://dummyjson.com/products${category ? `/category/${category}` : ''}?${
      orderBy ? `sortBy=${orderBy}&order=${orderType}` : ''
    }`,
  );

  return response.data.products;
};

export const getProductCategories = async () => {
  const response = await axios.get('https://dummyjson.com/products/categories');

  return response.data;
};
