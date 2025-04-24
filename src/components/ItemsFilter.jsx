import React from 'react';
import ClearAllFilters from './ClearAllFilters';
import RemoveAllItems from './RemoveAllItems';

export default function ItemsFilter(){
  return (
    <div>
      <ClearAllFilters />
      <RemoveAllItems />
    </div>
  )
}