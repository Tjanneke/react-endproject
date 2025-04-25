import React from 'react';
import CategorySelection from './CategorySelection';
import ClearAllFilters from './ClearAllFilters';
import RemoveAllItems from './RemoveAllItems';

export default function ItemsFilter({selectedFilter, onSelectFilter,onClearFilters }){
  return (
    <div className='flex gap-4 items-center justify-between my-4'>
      <div className='flex gap-2'>
      <CategorySelection selectedCategory={selectedFilter} onSelectCategory={onSelectFilter} />
        <ClearAllFilters onClear={onClearFilters} />
        <RemoveAllItems />
      </div>
    </div>
  )
}