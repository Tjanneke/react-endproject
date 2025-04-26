import React from 'react';
import { useItems } from '../context/ItemsContext';

export default function RemoveAllItems( {packed}){
  const { dispatch } = useItems();
  const handleClear = () => {
    dispatch({ type: 'CLEARBYLIST', packed})
  }
  return (
    <button onClick={handleClear} className='bg-lime-300 hover:bg-lime-600 text-slate-600 px-4 py-2 rounded-sm'>Remove all { packed ? 'packed' : 'unpacked' } items</button>
  )
}