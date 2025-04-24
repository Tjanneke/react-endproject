import React, {useState, useContext} from 'react';

export default function AddItemInput(){
  return (
      <form className='flex gap-2 justif-center'>
        <input type='text' placeholder='Add an item' className='flex-1 px-4 py-2 rounded-sm text-slate-600 focus:outline-none focus:ring-1 focus:ring-lime-500 bg-slate-100'/>
        <button type='submit' className='bg-yellow-300 text-stone-600 px-5 py-3 rounded-sm font-bold'>Add</button>
      </form>
  )

}