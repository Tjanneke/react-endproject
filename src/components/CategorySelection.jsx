import { categories } from '../data/categories';
import React from 'react';

export default function CategorySelection(){
  return (
    <div className='flex flex-wrap gap-2 justify-center items-center'>
      <p>Category:</p>
      {categories.map((category) => (
        <button key={category.label} className={`${category.color} text-stone-600 px-4 py-2 rounded-sm font-semibold`}>{category.label}</button>
      ))}

    </div>
    // <div>
    //   Category
    //   Could use map(), would need to make an array for categories. JS file mayhaps?
    //   <button>Documents</button>
    //   <button>Clothes</button>
    //   <button>Gear</button>
    //   <button>Toiletry</button>
    // </div>
  )
}