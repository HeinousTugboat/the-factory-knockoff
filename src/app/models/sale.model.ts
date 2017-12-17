import { ItemModel, Tiers } from './item.model';

export class SaleModel {
  label: string = Math.floor(Math.random() * 2 ** 32).toString(16).toUpperCase();
  duration: number;
  due: number;
  created = Date.now();
  isOpen = true;
  isSold = false;
  isComplete = false;
  value = 0;

  constructor(public items: Map<ItemModel, number>) {
    for (const [item, qty] of items) {
      if (item.current >= qty) {
        item.current -= qty;
        this.value += qty * item.salePrice;
      } else {
        throw new Error('Invalid Sale Quantity!');
      }
    }
    this.duration = SaleModel.calculateDuration(items);
    this.due = this.created + this.duration;
  }

  static calculateDuration(items: Map<ItemModel, number>): number {
    let dur = 0;
    for (const [item, qty] of items) {
      const mod = SaleModel.getTierMod((item));
      dur += mod * qty * item.salePrice + 3500;
    }
    return Math.floor(dur);
  }

  static getTierMod(item: ItemModel): number {
    switch (item.tier) {
      case Tiers.RESOURCE:
      case Tiers.TIER_1:  return 120;
      case Tiers.TIER_2:  return 240;
      case Tiers.TIER_3:  return 360;
      case Tiers.TIER_4:  return 480;
      case Tiers.BUILDER: return 600;
      case Tiers.TASKER:  return 660;
      default:            return 0;
    }
  }
}
