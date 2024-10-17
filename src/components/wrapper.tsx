import React from 'react';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black">
      {children}
    </div>
  );
}
