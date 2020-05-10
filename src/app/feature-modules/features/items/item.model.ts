export interface ItemModel {
  item: number;
  quantity: number;
}

export interface Item {
  _id: number;
  name: string;
  type: string;
  price: number;
  rating: number;
  description: number;
  imgUrl: string;
}

export interface ItemRegisterModel {
  name: string;
  description: string;
  type: string;
  price: string;
  tags: string[];
  imgUrl: string;
}
