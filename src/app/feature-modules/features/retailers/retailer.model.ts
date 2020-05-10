import {LocationModel} from '../../../shared/models/location.model';

export interface RetailerModel {
  _id: number;
  name: string;
  phoneNumber: string;
  description: string;
  type: string;
  openingHours: string[];
  closingHours: string[];
  imgUrl: string;
  location: LocationModel;
  manager: {
    username: string;
    password: string;
  };
}
export interface RetailerRegisterModel {
  name: string;
  phoneNumber: string;
  description: string;
  type: string;
  latitude: string;
  longitude: string;
  tags: string;
  openingHr: number;
  openingMin: number;
  closingHr: number;
  closingMin: number;
  imgUrl: string;
  locationType: string;
}
