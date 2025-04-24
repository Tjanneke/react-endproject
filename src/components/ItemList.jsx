import React from 'react';
import ItemsFilter from './ItemsFilter';
import Item from './Item';
import CategorySelection from './CategorySelection';

export default function ItemList(){
  return (
     <div>
    <div className='space-y-2'>
        <h2>Items to pack</h2>
        <ItemsFilter />
        <CategorySelection />
        <ul className='space-y-2'>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <Item  item={item} />
            </li>  
          ))}  
        </ul>
     
    </div>
    <div className='space-y-2'>
        <h2>Packed items</h2>
        <ItemsFilter />
        <CategorySelection />
        <ul className='space-y-2'>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <Item  item={item} />
            </li>  
          ))}  
        </ul>
    </div>
  </div> 
  )

}