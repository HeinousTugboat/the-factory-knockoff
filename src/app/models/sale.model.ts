import { ItemModel } from './item.model';

export class SaleModel {
  label: string = Math.floor(Math.random() * 2 ** 32).toString(16).toUpperCase();
  duration: number;
  created = Date.now();
  isOpen = true;
  isSold = false;
  isComplete = false;

  constructor(public items: ItemModel[]) {

  }
}
