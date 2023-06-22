import { Item } from './../../items/entities/item.entity';

export class User {
  id: number;
  emailAddress: string;
  item: Item[];
}
