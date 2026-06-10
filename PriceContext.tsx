 
// src/components/PriceContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LivePrices } from '../types';

const PRICE_API_URL = "https://prices.runescape.wiki/api/v1/osrs/latest";

interface PriceContextType {
  prices: LivePrices;
  loading: boolean;
  getPrice: (id: number | null) => number;
}

const PriceContext = createContext<PriceContextType | undefined>(undefined);

export function PriceProvider({ children }: { children: React.ReactNode }) {
  const [prices, setPrices] = useState<LivePrices>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const response = await fetch(PRICE_API_URL, {
          headers: {
            // CRITICAL: Custom User-Agent ensures Vercel instances bypass strict Wiki Cloudflare rate-blocks
            'User-Agent': 'OSRS Farming Companion - Open Source Client Tracker'
          }
        });
        const json = await response.json();
        if (json && json.data) {
          setPrices(json.data);
        }
      } catch (err) {
        console.error("Critical Failure: Unable to fetch fresh OSRS Price Indexes", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Enforce a clean 60-second polling cycle
    return () => clearInterval(interval);
  }, []);

  // Safe accessor function that falls back cleanly to 0 if an item isn't traded or loaded
  const getPrice = (id: number | null): number => {
    if (!id || !prices[id]) return 0;
    return prices[id].high || prices[id].low || 0;
  };

  return (
    <PriceContext.Provider value={{ prices, loading, getPrice }}>
      {children}
    </PriceContext.Provider>
  );
}

export function usePrices() {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error('usePrices must be consumed inside a matching PriceProvider context wrapper.');
  }
  return context;
}
