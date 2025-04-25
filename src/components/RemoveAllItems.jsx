import React from 'react';
import { useItems } from '../context/ItemsContext';

export default function RemoveAllItems(){
  const { dispatch } = useItems();

  return (
    <button onClick={() => dispatch({ type: 'CLEARITEM' })} className='bg-lime-300 hover:bg-lime-600 text-slate-600 px-4 py-2 rounded-sm'>Remove all items</button>
  )
}