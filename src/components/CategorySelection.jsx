import React from 'react';
import { categories } from '../data/categories';

export default function CategorySelection({ selectedCategory, onSelectCategory }){

  return (
    <div className='flex flex-wrap gap-2 justify-center items-center'>
      <p>Category:</p>
      {categories.map((category) => {
        const isSelected = selectedCategory.includes(category.label); 
        return (
        <button type='button' key={category.label} onClick={() => onSelectCategory(category.label)} className={`text-stone-600 px-4 py-2 rounded-sm font-semibold ${ isSelected ? category.color  : 'bg-violet-100 text-slate-700'}`}>{category.label}</button>
      );
      
      })}

      {/* <button onClick={() => onSelectCategory('')} className={`text-stone-600 px-4 py-2 rounded-sm font-semibold ${selectedCategory === '' ? 'ring-2 ring-offset-2 ring-emerald-500' : ''}`}>All</button> */}

    </div>
  )
}