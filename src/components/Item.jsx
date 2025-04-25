import React from 'react';
import { useItems } from '../context/ItemsContext';

export default function Item({ item }){
  const { dispatch } = useItems();
  return (
    
    <div className='flex justify-between items-center p-3 bg-lime-200 text-slate-500'>
      <div>
        <p className='font-semibold'>{item.name}</p>
        <p className='text-sm text-slate-500'>{item.category}</p>
        <button onClick={()=> dispatch({ type: 'REMOVEITEM', id: item.id })} className='bg-grey-200 text-slate-300 px-3 py-2 rounded-sm'>Delete</button>
      </div>
      <button onClick={() => dispatch({ type: 'TOGGLEITEM', id: item.id})} className={`px-2 py-1 text-slate-600 rounded-sm ${item.packed ? 'bg-yellow-500' : 'bg-green-500'}`}>{item.packed ? 'Unpack' : ' Pack'}</button>
    </div> 
  )
}