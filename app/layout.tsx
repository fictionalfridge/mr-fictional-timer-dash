 // src/app/layout.tsx
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'OSRS Absolute Farming Tool',
  description: 'Complete Canonical Crop Management Tool Engine Framework',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 antialiased">{children}</body>
    </html>
  );
}

