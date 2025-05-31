export interface ItemI {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand: string;
  stock: number;
}

export interface SelectOptionI {
  id: string;
  name: string;
}

export enum ORDER_BY {
  PRICE = 'price',
  RATING = 'rating',
}

export enum ORDER_TYPE {
  ASC = 'asc',
  DESC = 'desc',
}
