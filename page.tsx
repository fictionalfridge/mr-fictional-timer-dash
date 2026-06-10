 // src/app/page.tsx
import React from 'react';
import Dashboard from '../components/Dashboard';
import { PriceProvider } from '../components/PriceContext';

export default function Home() {
  return (
    <PriceProvider>
      <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 selection:bg-amber-500 selection:text-slate-950">
        <div className="max-w-7xl mx-auto">
          <Dashboard />
        </div>
      </main>
    </PriceProvider>
  );
}

