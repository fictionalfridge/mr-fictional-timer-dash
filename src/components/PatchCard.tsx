 
// src/components/PatchCard.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { PatchDefinition, ActiveTimer, CropDefinition } from '../types';
import { CROPS } from '../data/crops';
import { usePrices } from './PriceContext';

interface PatchCardProps {
  patch: PatchDefinition;
  activeTimer: ActiveTimer | null;
  onSaveTimer: (patchId: string, cropId: number, compost: ActiveTimer['compostUsed'], paid: boolean) => void;
  onClearTimer: (patchId: string) => void;
}

export default function PatchCard({ patch, activeTimer, onSaveTimer, onClearTimer }: PatchCardProps) {
  const { getPrice } = usePrices();
  
  // Filter appropriate local inventory options depending on patch variant match values
  const getCategoryKey = (type: string): string => {
    if (type === 'Herb') return 'herbs';
    if (type === 'Allotment') return 'allotments';
    if (type === 'Tree') return 'trees';
    if (type === 'Fruit Tree') return 'fruitTrees';
    return 'herbs';
  };

  const cropOptions = CROPS[getCategoryKey(patch.type)] || [];
  
  const [selectedCropId, setSelectedCropId] = useState<number>(cropOptions[0]?.id || 0);
  const [compost, setCompost] = useState<ActiveTimer['compostUsed']>('None');
  const [paidFarmer, setPaidFarmer] = useState<boolean>(false);
  const [timeLeftStr, setTimeLeftStr] = useState<string>('');

  const currentCrop = cropOptions.find(c => c.id === selectedCropId);

  // Realtime ticking display updater block
  useEffect(() => {
    if (!activeTimer) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = activeTimer.expectedEndTime - now;

      if (diff <= 0) {
        setTimeLeftStr('Harvest Ready!');
        clearInterval(interval);
      } else {
        const totalSecs = Math.floor(diff / 1000);
        const hours = Math.floor(totalSecs / 3600);
        const mins = Math.floor((totalSecs % 3600) / 60);
        const secs = totalSecs % 60;
        setTimeLeftStr(`${hours}h ${mins}m ${secs}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTimer]);

  const handleStart = () => {
    if (!selectedCropId) return;
    onSaveTimer(patch.id, selectedCropId, compost, paidFarmer);
  };

  // Pre-calculate running supply overhead
  const compostItemMap = { 'None': null, 'Compost': 6032, 'Supercompost': 6034, 'Ultracompost': 21480 };
  const targetCompostId = compostItemMap[compost];
  const costSeed = getPrice(currentCrop?.id || null);
  const costCompost = targetCompostId ? getPrice(targetCompostId) : 0;
  const costPayment = (paidFarmer && currentCrop?.payment) ? getPrice(currentCrop.payment.itemId) * currentCrop.payment.qty : 0;
  const grossValue = getPrice(currentCrop?.productId || null);

  return (
    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex flex-col justify-between space-y-4">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-lg text-slate-100">{patch.type}</h4>
            {patch.diseaseFree && <span className="text-xs text-emerald-400 font-medium">✨ Protected Region</span>}
          </div>
          <span className="text-xs bg-slate-900 px-2 py-1 rounded text-slate-400 font-mono">{patch.id}</span>
        </div>

        {activeTimer ? (
          <div className="mt-4 p-3 bg-slate-950 rounded-lg border border-slate-700/50">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Active State</p>
            <p className="text-amber-400 font-bold text-lg mt-0.5">
              {cropOptions.find(c => c.id === activeTimer.cropId)?.name || 'Unknown Crop'}
            </p>
            <div className="mt-2 text-xl font-mono text-cyan-400 font-bold tracking-tight">
              {timeLeftStr}
            </div>
            <button 
              onClick={() => onClearTimer(patch.id)}
              className="mt-3 w-full py-1 bg-rose-950 hover:bg-rose-900 text-rose-200 border border-rose-800 text-xs rounded transition"
            >
              Clear Patch Slot
            </button>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Select Crop Variant</label>
              <select 
                className="w-full bg-slate-900 border border-slate-700 text-sm p-2 rounded text-slate-200 focus:outline-none"
                value={selectedCropId}
                onChange={(e) => setSelectedCropId(Number(e.target.value))}
              >
                {cropOptions.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Soil Fertilizer</label>
                <select 
                  className="w-full bg-slate-900 border border-slate-700 text-xs p-1.5 rounded text-slate-200"
                  value={compost}
                  onChange={(e) => setCompost(e.target.value as any)}
                >
                  <option value="None">No Treatment</option>
                  <option value="Compost">Compost</option>
                  <option value="Supercompost">Supercompost</option>
                  <option value="Ultracompost">Ultracompost</option>
                </select>
              </div>
              {currentCrop?.payment && (
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Protection Cost</label>
                  <label className="flex items-center space-x-1.5 p-1.5 bg-slate-900 rounded border border-slate-700 cursor-pointer text-xs h-[30px]">
                    <input 
                      type="checkbox" 
                      checked={paidFarmer} 
                      onChange={(e) => setPaidFarmer(e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span className="text-slate-300 truncate">Pay Watchman</span>
                  </label>
                </div>
              )}
            </div>
            
            {/* Financial margin breakdown preview */}
            <div className="p-2 bg-slate-900/60 rounded text-[11px] font-mono text-slate-400 space-y-0.5 border border-slate-700/20">
              <div className="flex justify-between"><span>Inputs (Seed + Soil):</span><span className="text-rose-400">{(costSeed + costCompost + costPayment).toLocaleString()} gp</span></div>
              <div className="flex justify-between"><span>Base Revenue Value:</span><span className="text-emerald-400">{grossValue.toLocaleString()} gp</span></div>
            </div>

            <button 
              onClick={handleStart}
              className="w-full py-2 bg-amber-600 hover:bg-amber-500 font-semibold text-xs text-slate-950 uppercase rounded tracking-wider shadow transition"
            >
              Plant & Synchronize Timer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
