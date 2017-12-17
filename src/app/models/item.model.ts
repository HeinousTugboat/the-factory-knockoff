export enum Tiers {
  RESOURCE = 'Resource',
  TIER_1 = 'Tier 1',
  TIER_2 = 'Tier 2',
  TIER_3 = 'Tier 3',
  TIER_4 = 'Tier 4',
  BUILDER = 'Builder',
  TASKER = 'Tasker'
}

type Item = [string, Tiers, number];

const items = [
  ['Cardboard', Tiers.RESOURCE, 0.18, 0.24],
  ['Concrete', Tiers.RESOURCE, 3.14, 4.19],
  ['Magnet', Tiers.RESOURCE, 4.26, 5.68],
  ['Metal', Tiers.RESOURCE, 2.55, 3.40],
  ['Paint', Tiers.RESOURCE, 1.70, 2.26],
  ['Plastic', Tiers.RESOURCE, 0.45, 0.60],
  ['Rare Metal', Tiers.RESOURCE, 5.86, 7.81],
  ['Rubber', Tiers.RESOURCE, 0.83, 1.10],
  ['Wire', Tiers.RESOURCE, 1.28, 1.71],
  ['Adv concrete', Tiers.TIER_1, 14.47],
  ['Belt', Tiers.TIER_1, 2.60],
  ['Box', Tiers.TIER_1, 2.21],
  ['Cable', Tiers.TIER_1, 3.28],
  ['Circuit', Tiers.TIER_1, 3.54],
  ['Gear', Tiers.TIER_1, 6.56],
  ['Hose', Tiers.TIER_1, 2.60],
  ['Metal wheel', Tiers.TIER_1, 6.56],
  ['Motor', Tiers.TIER_1, 17.40],
  ['Plastic wheel', Tiers.TIER_1, 1.72],
  ['Pump', Tiers.TIER_1, 8.72],
  ['Garden gnome', Tiers.TIER_1, 15.90, true],
  ['Speakers', Tiers.TIER_1, 29.42, true],
  ['Toaster', Tiers.TIER_1, 22.74, true],
  ['Air gun', Tiers.TIER_2, 19.78],
  ['Arm', Tiers.TIER_2, 51.68],
  ['Conveyor', Tiers.TIER_2, 102.58],
  ['Lifter', Tiers.TIER_2, 55.46],
  ['Logic unit', Tiers.TIER_2, 26.75],
  ['Mover', Tiers.TIER_2, 113.65],
  ['Road', Tiers.TIER_2, 49.80],
  ['Support', Tiers.TIER_2, 40.53],
  ['Thing-a-ma-jig', Tiers.TIER_2, 61.02],
  ['Widget', Tiers.TIER_2, 14.78],
  ['Toy car', Tiers.TIER_2, 35.38, true],
  ['Water gun', Tiers.TIER_2, 29.62, true],
  ['Adv logic unit', Tiers.TIER_3, 87.15],
  ['Assembly line', Tiers.TIER_3, 715.84],
  ['Jet engine', Tiers.TIER_3, 180.04],
  ['Sensor', Tiers.TIER_3, 51.51],
  ['Bridge', Tiers.TIER_3, 1091.16, true],
  ['Forklift', Tiers.TIER_3, 198.04, true],
  ['Radio tower', Tiers.TIER_3, 414.00, true],
  ['Tablet computer', Tiers.TIER_3, 93.14, true],
  ['Drone', Tiers.TIER_4, 542.06, true],
  ['Jet', Tiers.TIER_4, 3514.76, true],
  ['Oculus Rift', Tiers.TIER_4, 307.84, true],
  ['Builder: Tier 1', Tiers.BUILDER, 328.74],
  ['Builder: Tier 2', Tiers.BUILDER, 423.20],
  ['Builder: Tier 3', Tiers.BUILDER, 994.55],
  ['Builder: Tier 4', Tiers.BUILDER, 1416.87],
  ['Builder: Builders', Tiers.BUILDER, 1273.64],
  ['Builder: Taskers', Tiers.BUILDER, 1099.85],
  ['Builder: Universal', Tiers.BUILDER, 2297.77],
  ['Tasker: Purchasing', Tiers.TASKER, 79.32],
  ['Tasker: Sales', Tiers.TASKER, 196.96]
];


export class ItemModel {
  static list: Map<string, ItemModel> = new Map;
  available = false;
  retail = false;
  // current = 0;
  current = 100;
  total = 0;
  buyPrice: number;

  constructor(
      public name: string,
      public tier: Tiers,
      public salePrice: number, option?: number | boolean) {

    if (typeof option === 'number') {
      this.buyPrice = option;
    }
    if (typeof option === 'boolean') {
      this.retail = option;
    }
    if (tier === Tiers.RESOURCE) {
      this.available = true;
    }
    ItemModel.list.set(name, this);
  }

  static init(): ItemModel[] {
    if (ItemModel.list.size > 0) {
      return Array.from(ItemModel.list.values());
    }
    const arr: ItemModel[] = [];
    let name: string, tier: Tiers, sell: number, buy: number | boolean;

    for (const item of items) {
      [name, tier, sell] = item as [string, Tiers, number];
      if (item[3]) {
        buy = item[3] as (number|boolean);
        arr.push(new ItemModel(name, tier, sell, buy));
      } else {
        arr.push(new ItemModel(name, tier, sell));
      }
    }
    return arr;
  }
}
