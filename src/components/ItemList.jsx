import React, { useState } from 'react';
import { useItems } from '../context/ItemsContext';
import ItemsFilter from './ItemsFilter';
import Item from './Item';
import CategorySelection from './CategorySelection';
import { categories } from '../data/categories';

export default function ItemList({ packed }){
 const [activeFilters, setActiveFilters] = useState([]);
 const { items } = useItems();
 
 
 const filteredItems = items.filter(item => item.packed === packed).filter(item => activeFilters.length === 0 ? true : activeFilters.includes(item.category));

 const toggleFilter = (category) => {
  setActiveFilters((previousFilters) => previousFilters.includes(category) ? previousFilters.filter((cat) => cat !== category) : [...previousFilters, category] )
 }
 const relevantItems = items.filter(item => item.packed === packed);
 const isListEmpty = relevantItems.length === 0;

 const clearFilters = () => setActiveFilters([]);

  


  return ( 
    <div className={`space-y-2 ${isListEmpty ? 'opacity-50 pointer-events-none' : ''}`}>
        <h2>{packed ? 'Packed Items' : 'Items to Pack'}</h2>
               <ItemsFilter selectedFilters={activeFilters} onSelectFilter={toggleFilter} onClearFilters={clearFilters} packed={packed}/>


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