 
// src/types/index.ts

export interface PaymentRequirement {
  itemId: number;
  qty: number;
  name: string;
}

export interface CropDefinition {
  id: number; // Seed/Sapling Item ID
  name: string;
  product: string;
  productId: number; // Harvested product Item ID
  growthTicks: number;
  minutesPerTick: number;
  payment: PaymentRequirement | null;
}

export interface PatchDefinition {
  id: string;
  type: string;
  location?: string;
  tier?: number;
  cave?: boolean;
  diseaseFree?: boolean;
  count?: number;
}

export interface RegionGroup {
  region: string;
  patches: PatchDefinition[];
}

export interface ActiveTimer {
  patchId: string;
  cropId: number;
  startTime: number; // Unix timestamp in ms
  expectedEndTime: number; // Unix timestamp in ms
  compostUsed: 'None' | 'Compost' | 'Supercompost' | 'Ultracompost';
  paidFarmer: boolean;
}

export interface WikiPriceItem {
  high: number;
  highTime: number;
  low: number;
  lowTime: number;
}

export type LivePrices = Record<number, WikiPriceItem>;
