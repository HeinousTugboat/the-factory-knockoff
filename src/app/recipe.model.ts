import { ItemModel, Tiers } from './item.model';

const recipes: [string, Tiers, string, string[]][] = [
  ['Adv concrete', Tiers.TIER_1,
    'Adv concrete', [
      'Concrete', 'Concrete',
      'Metal', 'Metal'
    ]],
  ['Belt', Tiers.TIER_1,
    'Belt', [
      'Rubber', 'Rubber'
    ]],
  ['Box', Tiers.TIER_1,
    'Box', [
      'Cardboard', 'Cardboard', 'Cardboard', 'Cardboard'
    ]],
  ['Cable', Tiers.TIER_1,
    'Cable', [
      'Metal'
    ]],
  ['Circuit', Tiers.TIER_1,
    'Circuit', [
      'Plastic', 'Plastic', 'Wire'
    ]],
  ['Gear', Tiers.TIER_1,
    'Gear', [
      'Metal', 'Metal'
    ]],
  ['Hose', Tiers.TIER_1,
    'Hose', [
      'Rubber', 'Rubber'
    ]],
  ['Metal wheel', Tiers.TIER_1,
    'Metal wheel', [
      'Metal', 'Metal'
    ]],
  ['Motor', Tiers.TIER_1,
    'Motor', [
      'Magnet', 'Magnet', 'Metal', 'Wire'
    ]],
  ['Plastic wheel', Tiers.TIER_1,
    'Plastic wheel', [
      'Plastic', 'Plastic'
    ]],
  ['Pump', Tiers.TIER_1,
    'Pump', [
      'Metal', 'Metal', 'Plastic', 'Rubber'
    ]],
  ['Garden gnome', Tiers.TIER_1,
    'Garden gnome', [
      'Concrete', 'Paint', 'Box'
    ]],
  ['Speakers', Tiers.TIER_1,
    'Speakers', [
      'Magnet', 'Magnet', 'Plastic', 'Plastic', 'Wire', 'Box'
    ]],
  ['Toaster', Tiers.TIER_1,
    'Toaster', [
      'Metal', 'Metal', 'Wire', 'Wire', 'Box'
    ]],
  ['Air gun', Tiers.TIER_2,
    'Air gun', [
      'Metal', 'Metal', 'Metal', 'Metal', 'Hose', 'Hose'
    ]],
  ['Arm', Tiers.TIER_2,
    'Arm', [
      'Metal', 'Metal', 'Circuit', 'Motor', 'Motor'
    ]],
  ['Conveyor', Tiers.TIER_2,
    'Conveyor', [
      'Belt', 'Gear', 'Gear', 'Metal wheel', 'Metal wheel', 'Metal wheel',
      'Metal wheel', 'Metal wheel', 'Metal wheel', 'Metal wheel', 'Metal wheel',
      'Motor'
    ]],
  ['Lifter', Tiers.TIER_2,
    'Lifter', [
      'Metal', 'Metal', 'Metal', 'Cable', 'Cable', 'Hose', 'Hose', 'Motor',
      'Pump'
    ]],
  ['Logic unit', Tiers.TIER_2,
    'Logic unit', [
      'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Circuit', 'Circuit', 'Circuit',
      'Circuit'
    ]],
  ['Mover', Tiers.TIER_2,
    'Mover', [
      'Metal', 'Metal', 'Metal', 'Gear', 'Gear', 'Gear', 'Gear',
      'Metal wheel', 'Metal wheel', 'Metal wheel', 'Metal wheel', 'Motor',
      'Motor'
    ]],
  ['Road', Tiers.TIER_2,
    'Road', [
      'Concrete', 'Concrete', 'Concrete', 'Concrete', 'Adv concrete',
      'Adv concrete'
    ]],
  ['Support', Tiers.TIER_2,
    'Support', [
      'Metal', 'Metal', 'Adv concrete', 'Adv concrete'
    ]],
  ['Thing-a-ma-jig', Tiers.TIER_2,
    'Thing-a-ma-jig', [
      'Circuit', 'Circuit', 'Circuit', 'Hose', 'Hose', 'Motor', 'Pump', 'Pump'
    ]],
  ['Widget', Tiers.TIER_2,
    'Widget', [
      'Metal', 'Plastic', 'Plastic', 'Plastic', 'Plastic', 'Wire', 'Wire',
      'Circuit'
    ]],
  ['Toy car', Tiers.TIER_2,
    'Toy car', [
      'Metal', 'Paint', 'Plastic', 'Plastic', 'Plastic', 'Plastic wheel',
      'Plastic wheel', 'Plastic wheel', 'Plastic wheel', 'Box'
    ]],
  ['Water gun', Tiers.TIER_2,
    'Water gun', [
      'Paint', 'Plastic', 'Plastic', 'Plastic', 'Plastic', 'Plastic', 'Plastic',
      'Hose', 'Hose', 'Box'
    ]],
  ['Adv logic unit', Tiers.TIER_3,
    'Adv logic unit', [
      'Wire', 'Wire', 'Wire', 'Wire', 'Circuit', 'Circuit', 'Circuit',
      'Circuit', 'Logic unit', 'Logic unit'
    ]],
  ['Assembly line', Tiers.TIER_3,
    'Assembly line', [
      'Air gun', 'Air gun', 'Arm', 'Arm', 'Conveyor', 'Conveyor', 'Conveyor',
      'Lifter', 'Mover'
    ]],
  ['Jet engine', Tiers.TIER_3,
    'Jet engine', [
      'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal',
      'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Wire',
      'Wire', 'Wire', 'Wire', 'Hose', 'Hose', 'Hose', 'Hose', 'Hose', 'Hose',
      'Pump', 'Pump', 'Pump', 'Pump', 'Thing-a-ma-jig'
    ]],
  ['Sensor', Tiers.TIER_3,
    'Sensor', [
      'Rare metal', 'Wire', 'Circuit', 'Logic unit'
    ]],
  ['Bridge', Tiers.TIER_3,
    'Bridge', [
      'Road', 'Road', 'Road', 'Road', 'Road', 'Road', 'Support', 'Support',
      'Support', 'Support', 'Support', 'Support'
    ]],
  ['Forklift', Tiers.TIER_3,
    'Forklift', [
      'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Rubber', 'Rubber',
      'Rubber', 'Rubber', 'Rubber', 'Rubber', 'Rubber', 'Rubber', 'Metal wheel',
      'Metal wheel', 'Metal wheel', 'Metal wheel', 'Motor', 'Motor', 'Box',
      'Box', 'Box', 'Box'
    ]],
  ['Radio tower', Tiers.TIER_3,
    'Radio tower', [
      'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal',
      'Metal', 'Metal', 'Metal', 'Metal', 'Wire', 'Wire', 'Wire', 'Wire',
      'Wire', 'Wire', 'Support', 'Support', 'Support', 'Support'
    ]],
  ['Tablet computer', Tiers.TIER_3,
    'Tablet computer', [
      'Plastic', 'Wire', 'Wire', 'Wire', 'Circuit', 'Circuit', 'Circuit',
      'Logic unit', 'Box'
    ]],
  ['Drone', Tiers.TIER_4,
    'Drone', [
      'Plastic', 'Plastic', 'Plastic', 'Plastic', 'Rare metal', 'Motor',
      'Motor', 'Motor', 'Motor', 'Adv logic unit', 'Sensor', 'Sensor'
    ]],
  ['Jet', Tiers.TIER_4,
    'Jet', [
      'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal',
      'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal',
      'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal', 'Metal',
      'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Wire', 'Wire',
      'Wire', 'Wire', 'Wire', 'Adv logic unit', 'Adv logic unit',
      'Adv logic unit', 'Adv logic unit', 'Adv logic unit', 'Adv logic unit',
      'Jet engine', 'Jet engine', 'Jet engine', 'Jet engine', 'Sensor',
      'Sensor', 'Sensor', 'Sensor', 'Sensor', 'Sensor', 'Sensor', 'Sensor'
    ]],
  ['Oculus Rift', Tiers.TIER_4,
    'Oculus Rift', [
      'Plastic', 'Plastic', 'Rare metal', 'Rare metal', 'Wire', 'Wire',
      'Wire', 'Wire', 'Widget', 'Widget', 'Sensor', 'Sensor'
    ]],
  ['Builder: Tier 1', Tiers.BUILDER,
    'Builder: Tier 1', [
    ]],
  ['Builder: Tier 2', Tiers.BUILDER,
    'Builder: Tier 2', [
    ]],
  ['Builder: Tier 3', Tiers.BUILDER,
    'Builder: Tier 3', [
    ]],
  ['Builder: Tier 4', Tiers.BUILDER,
    'Builder: Tier 4', [
    ]],
  ['Builder: Builders', Tiers.BUILDER,
    'Builder: Builders', [
    ]],
  ['Builder: Taskers', Tiers.BUILDER,
    'Builder: Taskers', [
    ]],
  ['Builder: Universal', Tiers.BUILDER,
    'Builder: Universal', [
    ]],
  ['Tasker: Purchasing', Tiers.TASKER,
    'Tasker: Purchasing', [
    ]],
  ['Tasker: Sales', Tiers.TASKER,
    'Tasker: Sales', [
    ]]
];

export class RecipeModel {
  static list: Map<string, RecipeModel> = new Map;
  public progress: ItemModel[] = [];
  public output: ItemModel;
  public inputs: ItemModel[] = [];

  constructor(
    public label: string,
    public tier: Tiers,
    outputLabel: string,
    inputLabels: string[]
  ) {
    for (const inputLabel of inputLabels) {
      this.inputs.push(ItemModel.list.get(inputLabel));
    }
    this.output = ItemModel.list.get(outputLabel);
    RecipeModel.list.set(label, this);
  }

  static init(): RecipeModel[] {
    if (RecipeModel.list.size > 0) {
      return Array.from(RecipeModel.list.values());
    }
    const arr: RecipeModel[] = [];
    let label: string, tier: Tiers, outputLabel: string, inputLabels: string[];
    for (const recipe of recipes) {
      [label, tier, outputLabel, inputLabels] = recipe;
      arr.push(new RecipeModel(label, tier, outputLabel, inputLabels));
    }
    return arr;
  }

  make() {
    console.log('Ooo. Shiny.');
  }
}
