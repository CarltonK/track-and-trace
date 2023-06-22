import { User } from './../../users/entities/user.entity';
import { ItemAddress } from './item.address.entity';
import { ItemEvent } from './item.event.entity';

export class Item {
  id: number;
  addressId: number;
  userId: number;
  color: string;
  price: number;
  createdAt: Date;
  address: ItemAddress;
  custodian: User;
  events: ItemEvent[];
}
