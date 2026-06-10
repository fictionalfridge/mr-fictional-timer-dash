 
// src/data/patches.ts
import { RegionGroup } from '../types';

export const PATCH_REGIONS: RegionGroup[] = [
  {
    region: "Falador (South)",
    patches: [
      { id: "fala_allot_1", type: "Allotment" },
      { id: "fala_allot_2", type: "Allotment" },
      { id: "fala_flower", type: "Flower" },
      { id: "fala_herb", type: "Herb" }
    ]
  },
  {
    region: "Catherby",
    patches: [
      { id: "cath_allot_1", type: "Allotment" },
      { id: "cath_allot_2", type: "Allotment" },
      { id: "cath_flower", type: "Flower" },
      { id: "cath_herb", type: "Herb" },
      { id: "cath_fruit_tree", type: "Fruit Tree" }
    ]
  },
  {
    region: "Ardougne (North)",
    patches: [
      { id: "ard_allot_1", type: "Allotment" },
      { id: "ard_allot_2", type: "Allotment" },
      { id: "ard_flower", type: "Flower" },
      { id: "ard_herb", type: "Herb" }
    ]
  },
  {
    region: "Morytania (Phasmatys)",
    patches: [
      { id: "mory_allot_1", type: "Allotment" },
      { id: "mory_allot_2", type: "Allotment" },
      { id: "mory_flower", type: "Flower" },
      { id: "mory_herb", type: "Herb" }
    ]
  },
  {
    region: "Farming Guild",
    patches: [
      { id: "guild_allot_1", type: "Allotment", tier: 1 },
      { id: "guild_allot_2", type: "Allotment", tier: 1 },
      { id: "guild_flower", type: "Flower", tier: 1 },
      { id: "guild_herb", type: "Herb", tier: 2 },
      { id: "guild_tree", type: "Tree", tier: 2 },
      { id: "guild_fruit_tree", type: "Fruit Tree", tier: 3 },
      { id: "guild_celastrus", type: "Celastrus", tier: 3 },
      { id: "guild_redwood", type: "Redwood", tier: 3 }
    ]
  },
  {
    region: "Hosidius",
    patches: [
      { id: "hosi_allot_1", type: "Allotment" },
      { id: "hosi_allot_2", type: "Allotment" },
      { id: "hosi_flower", type: "Flower" },
      { id: "hosi_herb", type: "Herb", diseaseFree: true }
    ]
  },
  {
    region: "Weiss",
    patches: [{ id: "weiss_herb", type: "Herb", diseaseFree: true }]
  },
  {
    region: "Troll Stronghold",
    patches: [{ id: "troll_herb", type: "Herb", diseaseFree: true }]
  },
  {
    region: "Prifddinas",
    patches: [
      { id: "prif_herb", type: "Herb" },
      { id: "prif_fruit_tree", type: "Fruit Tree" }
    ]
  }
];
