 // src/components/Dashboard.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { PATCH_REGIONS } from '../data/patches';
import { CROPS } from '../data/crops';
import { ActiveTimer } from '../types';
import PatchCard from './PatchCard';
import { usePrices } from './PriceContext';

export default function Dashboard() {
  const { getPrice, loading } = usePrices();
  const [activeTimers, setActiveTimers] = useState<Record<string, ActiveTimer>>({});
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Hydrate timer records natively out of localStorage on boot
  useEffect(() => {
    const saved = localStorage.getItem('osrs_farming_timers');
    if (saved) {
      try {
        setActiveTimers(JSON.parse(saved));
      } catch (e) {
        console.error("Failed parsing existing active timer profiles", e);
      }
    }
  }, []);

  const handleSaveTimer = (
    patchId: string, 
    cropId: number, 
    compost: ActiveTimer['compostUsed'], 
    paid: boolean
  ) => {
    // Find crop duration specifics
    const allCrops = Object.values(CROPS).flat();
    const targetCrop = allCrops.find(c => c.id === cropId);
    if (!targetCrop) return;

    const durationMs = targetCrop.growthTicks * targetCrop.minutesPerTick * 60 * 1000;
    const now = Date.now();

    const newTimer: ActiveTimer = {
      patchId,
      cropId,
      startTime: now,
      expectedEndTime: now + durationMs,
      compostUsed: compost,
      paidFarmer: paid
    };

    const updated = { ...activeTimers, [patchId]: newTimer };
    setActiveTimers(updated);
    localStorage.setItem('osrs_farming_timers', JSON.stringify(updated));
  };

  const handleClearTimer = (patchId: string) => {
    const updated = { ...activeTimers };
    delete updated[patchId];
    setActiveTimers(updated);
    localStorage.setItem('osrs_farming_timers', JSON.stringify(updated));
  };

  // Collect a distinct catalog list of patch types present inside the static registry 
  const distinctTypes = ['All', 'Herb', 'Allotment', 'Tree', 'Fruit Tree', 'Flower', 'Bush', 'Celastrus', 'Redwood'];

  return (
    <div className="space-y-8">
      {/* Upper Status / Header HUD Bar */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-xl">
        <div>
          <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest">Global Status Index</p>
          <h2 className="text-2xl font-black text-white mt-1">Gielinor Operations Tracker</h2>
        </div>
        <div className="flex items-center gap-4 bg-slate-900 p-3 rounded-lg border border-slate-700/50 font-mono text-xs">
          <div>
            <span className="text-slate-400">Tracked Slots:</span>{' '}
            <span className="text-cyan-400 font-bold">{Object.keys(activeTimers).length} active</span>
          </div>
          <div className="h-4 w-px bg-slate-700" />
          <div>
            <span className="text-slate-400">GE Pricing Node:</span>{' '}
            {loading ? (
              <span className="text-amber-400 animate-pulse">Syncing...</span>
            ) : (
              <span className="text-emerald-400 font-bold">Connected</span>
            )}
          </div>
        </div>
      </div>

      {/* Filter Navigation Menu Block */}
      <div className="flex flex-wrap gap-1.5 border-b border-slate-800 pb-3">
        {distinctTypes.map(type => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border transition uppercase ${
              activeFilter === type
                ? 'bg-amber-600 text-slate-950 border-amber-500 font-bold'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {type}s
          </button>
        ))}
      </div>

      {/* Regional Zone Iteration Layout Render */}
      <div className="space-y-8">
        {PATCH_REGIONS.map(regionGroup => {
          // Filter down individual local patch configurations matching structural selector toggles
          const validPatches = regionGroup.patches.filter(
            p => activeFilter === 'All' || p.type === activeFilter
          );

          if (validPatches.length === 0) return null;

          return (
            <div key={regionGroup.region} className="space-y-3">
              <h3 className="text-lg font-bold text-slate-300 border-l-4 border-amber-500 pl-2.5">
                {regionGroup.region} Sectors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {validPatches.map(patch => (
                  <PatchCard
                    key={patch.id}
                    patch={patch}
                    activeTimer={activeTimers[patch.id] || null}
                    onSaveTimer={handleSaveTimer}
                    onClearTimer={handleClearTimer}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

