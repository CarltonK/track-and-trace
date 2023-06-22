import { Item } from './item.entity';

export class ItemAddress {
  id: number;
  country: string;
  county: string;
  town: string;
  latitude: number;
  longitude: number;
  item: Item[];
}
