import {LocationModel} from '../../../shared/models/location.model';

export interface RetailerModel {
  _id: number;
  name: string;
  phoneNumber: string;
  description: string;
  type: string;
  openingHours: string[];
  closingHours: string;
  imgUrl: string;
  location: LocationModel;
  manager: {
    username: string;
    password: string;
  };
}
