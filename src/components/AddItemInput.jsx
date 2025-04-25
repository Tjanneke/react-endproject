import React, {useState} from 'react';
import { useItems } from '../context/ItemsContext'
import CategorySelection from './CategorySelection';


export default function AddItemInput(){
  const { dispatch } = useItems();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name.trim() || !category) return;
    dispatch({ type: 'ADDITEM', name, category });
    setName('');
    setCategory('')
  }

  return (
      <form onSubmit={ handleSubmit } className='flex gap-2 justif-center'>
        <CategorySelection selectedCategory={ category } onSelectCategory={ setCategory } />
        <input type='text' value={ name } onChange={(e) => setName(e.target.value)} placeholder='Add an item' className='flex-1 px-4 py-2 rounded-sm text-slate-600 focus:outline-none focus:ring-1 focus:ring-lime-500 bg-slate-100'/>
        <button type='submit' className='bg-yellow-300 text-stone-600 px-5 py-3 rounded-sm font-bold' disabled={ !name.trim() || !category }>Add</button>
      </form>
  )

}