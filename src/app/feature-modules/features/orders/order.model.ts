import {Customer} from '../customers/customer.model';
import {ItemModel} from '../items/item.model';
import {LocationModel} from '../../../shared/models/location.model';

export interface OrderModel {
  customer: Customer;
  items: Array<ItemModel>;
  retailer: number;
  totalPrice: number;
  status: string;
  deliveryLocation: LocationModel;
  orderTime: string;
  driver: number;
}

