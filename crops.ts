 
// src/data/crops.ts
import { CropDefinition } from '../types';

export const CROPS: Record<string, CropDefinition[]> = {
  herbs: [
    { id: 5291, name: "Guam seed", product: "Grimy guam leaf", productId: 199, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5292, name: "Marrentill seed", product: "Grimy marrentill", productId: 201, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5293, name: "Tarromin seed", product: "Grimy tarromin", productId: 203, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5294, name: "Harralander seed", product: "Grimy harralander", productId: 205, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5295, name: "Ranarr seed", product: "Grimy ranarr weed", productId: 207, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5296, name: "Toadflax seed", product: "Grimy toadflax", productId: 3049, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5297, name: "Irit seed", product: "Grimy irit leaf", productId: 209, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5298, name: "Avantoe seed", product: "Grimy avantoe", productId: 211, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5299, name: "Kwuarm seed", product: "Grimy kwuarm", productId: 213, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5300, name: "Snapdragon seed", product: "Grimy snapdragon", productId: 3051, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5301, name: "Cadantine seed", product: "Grimy cadantine", productId: 215, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5302, name: "Lantadyme seed", product: "Grimy lantadyme", productId: 2485, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5303, name: "Dwarf weed seed", product: "Grimy dwarf weed", productId: 217, growthTicks: 4, minutesPerTick: 20, payment: null },
    { id: 5304, name: "Torstol seed", product: "Grimy torstol", productId: 219, growthTicks: 4, minutesPerTick: 20, payment: null }
  ],
  allotments: [
    { id: 5318, name: "Potato seed", product: "Potato", productId: 1942, growthTicks: 4, minutesPerTick: 10, payment: { itemId: 1965, qty: 2, name: "Compost" } },
    { id: 5319, name: "Onion seed", product: "Onion", productId: 1957, growthTicks: 4, minutesPerTick: 10, payment: { itemId: 1959, qty: 1, name: "Sack of potatoes" } },
    { id: 5324, name: "Cabbage seed", product: "Cabbage", productId: 1965, growthTicks: 4, minutesPerTick: 10, payment: { itemId: 1957, qty: 1, name: "Sack of onions" } },
    { id: 5322, name: "Tomato seed", product: "Tomato", productId: 1982, growthTicks: 4, minutesPerTick: 10, payment: { itemId: 1985, qty: 2, name: "Sack of cabbages" } },
    { id: 5321, name: "Sweetcorn seed", product: "Sweetcorn", productId: 5986, growthTicks: 6, minutesPerTick: 10, payment: { itemId: 5992, qty: 1, name: "Sack of tomatoes" } },
    { id: 5320, name: "Strawberry seed", product: "Strawberry", productId: 5504, growthTicks: 6, minutesPerTick: 10, payment: { itemId: 5996, qty: 1, name: "Basket of apples" } },
    { id: 5323, name: "Watermelon seed", product: "Watermelon", productId: 5982, growthTicks: 8, minutesPerTick: 10, payment: { itemId: 5972, qty: 5, name: "Curry leaf" } },
    { id: 22875, name: "Snape grass seed", product: "Snape grass", productId: 231, growthTicks: 7, minutesPerTick: 10, payment: { itemId: 5974, qty: 5, name: "Jangerberries" } }
  ],
  trees: [
    { id: 5312, name: "Acorn", product: "Oak log", productId: 1521, growthTicks: 4, minutesPerTick: 40, payment: { itemId: 5992, qty: 1, name: "Sack of tomatoes" } },
    { id: 5313, name: "Willow seed", product: "Willow log", productId: 1519, growthTicks: 6, minutesPerTick: 40, payment: { itemId: 5504, qty: 1, name: "Basket of apples" } },
    { id: 5314, name: "Maple seed", product: "Maple log", productId: 1517, growthTicks: 8, minutesPerTick: 40, payment: { itemId: 5996, qty: 1, name: "Basket of oranges" } },
    { id: 5315, name: "Yew seed", product: "Yew log", productId: 1515, growthTicks: 10, minutesPerTick: 40, payment: { itemId: 5998, qty: 10, name: "Cactus spine" } },
    { id: 5316, name: "Magic seed", product: "Magic log", productId: 1513, growthTicks: 12, minutesPerTick: 40, payment: { itemId: 5970, qty: 25, name: "Coconut" } }
  ],
  fruitTrees: [
    { id: 5283, name: "Apple sapling", product: "Cooking apple", productId: 1955, growthTicks: 6, minutesPerTick: 160, payment: { itemId: 5986, qty: 9, name: "Sweetcorn" } },
    { id: 5284, name: "Banana sapling", product: "Banana", productId: 1963, growthTicks: 6, minutesPerTick: 160, payment: { itemId: 5504, qty: 4, name: "Basket of apples" } },
    { id: 5285, name: "Orange sapling", product: "Orange", productId: 2114, growthTicks: 6, minutesPerTick: 160, payment: { itemId: 5972, qty: 3, name: "Strawberries" } },
    { id: 5286, name: "Curry sapling", product: "Curry leaf", productId: 5972, growthTicks: 6, minutesPerTick: 160, payment: { itemId: 5968, qty: 5, name: "Whiteberries" } },
    { id: 5287, name: "Pineapple sapling", product: "Pineapple", productId: 2118, growthTicks: 6, minutesPerTick: 160, payment: { itemId: 5970, qty: 10, name: "Watermelon" } },
    { id: 5288, name: "Papaya sapling", product: "Papaya fruit", productId: 5972, growthTicks: 6, minutesPerTick: 160, payment: { itemId: 5974, qty: 10, name: "Pineapple" } },
    { id: 5289, name: "Palm sapling", product: "Coconut", productId: 5970, growthTicks: 6, minutesPerTick: 160, payment: { itemId: 5978, qty: 15, name: "Papaya fruit" } },
    { id: 22866, name: "Dragonfruit sapling", product: "Dragonfruit", productId: 22829, growthTicks: 6, minutesPerTick: 160, payment: { itemId: 22859, qty: 15, name: "Coconut" } }
  ]
};

// Flattened lookup engine map helper
export const getAllCropsFlat = (): CropDefinition[] => {
  return Object.values(CROPS).flat();
};

export const getPatchTypeByCropCategory = (category: string): string => {
  if (category === 'herbs') return 'Herb';
  if (category === 'allotments') return 'Allotment';
  if (category === 'trees') return 'Tree';
  if (category === 'fruitTrees') return 'Fruit Tree';
  return 'Herb';
};
