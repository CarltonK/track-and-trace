import { Item } from './item.entity';

export class ItemEvent {
  id: number;
  title: string;
  createdAt: Date;
  item: Item;
  itemId: number;
}
