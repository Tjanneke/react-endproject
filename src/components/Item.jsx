import React from 'react';

export default function Item({ item }){
  return (
    <>
    <div className='flex justify-between items-center bg-lime-200 text-slate-500'>
      <div>
        <p className='font-semibold'>{item.name}</p>
        <span>{item.category}</span>
        <button className='bg-grey-200 text-slate-300 px-3 py-2 rounded-sm'>Delete</button>
      </div>
      <button>Pack/Unpack</button>
    </div>
   </>
  )
}