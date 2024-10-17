import React from 'react';

export default function Loader() {
  return (
    <div className="flex h-64 items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
    </div>
  );
}
