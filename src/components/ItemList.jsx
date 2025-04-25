import React, { useState } from 'react';
import { useItems } from '../context/ItemsContext';
import ItemsFilter from './ItemsFilter';
import Item from './Item';
import CategorySelection from './CategorySelection';
import { categories } from '../data/categories';

export default function ItemList({ packed, selectedFilter, setSelectedFilter, setFilteredItems }){

  const { items } = useItems();
  
  const filteredItems = items.filter(item => item.packed === packed).filter(item => selectedFilter ? item.category === selectedFilter : true);

  return ( 
    <div className='space-y-2'>
        <h2>{packed ? 'Packed Items' : 'Items to Pack'}</h2>
               <ItemsFilter selectedFilter={selectedFilter} onSelect={setSelectedFilter} onClearFilters={()=> setSelectedFilter('')}/>


{filteredItems.length === 0 ? (<p className='text-slate-600'>No items { packed ? 'packed' : 'to pack' } yet</p>) : (
        <ul className='space-y-2'>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <Item  item={item} />
            </li>  
          ))}  
        </ul>
        )}
  </div> 
  )

}