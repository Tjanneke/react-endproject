import React from 'react';
import CategorySelection from './CategorySelection';
import ClearAllFilters from './ClearAllFilters';
import RemoveAllItems from './RemoveAllItems';

export default function ItemsFilter({selectedFilters, onSelectFilter,onClearFilters, packed }){
  return (
    <div className='flex gap-4 items-center justify-between my-4'>
      <div className='flex gap-2'>
      <CategorySelection selectedCategory={selectedFilters} onSelectCategory={onSelectFilter} />
        <ClearAllFilters onClear={onClearFilters} />
        <RemoveAllItems packed={packed} />
      </div>
    </div>
  )
}