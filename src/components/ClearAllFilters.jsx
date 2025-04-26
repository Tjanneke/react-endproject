import React from 'react';

export default function ClearAllFilters({ onClear }){
  return (
    <button className='bg-violet-300 hover:bg-violet-400 text-slate-600 px-2 py-2 rounded-sm' onClick={onClear}>Clear all filters</button>
  )
}