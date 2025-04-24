import React from 'react';
import CategorySelection from './components/CategorySelection';
import AddItemInput from './components/AddItemInput';
import ItemList from './components/ItemList';

function App() {
  return (
    <>
    <div className='min-h-screen bg-slate-300 text-stone-600 p-4'>
      <div className='max-w-2xl mx-auto space-y-6'>
        <h1 className='text-3xl font-bold text-center text-lime-500'>Packing List Helper</h1>
        <CategorySelection />
        <AddItemInput />
        <ItemList />
       </div>
    </div>
    {/* <div>
      <p>NEED TO MAKE CONTEXT FILE AND DATA?</p>
      <div>
        <h1>Packing List Helper</h1>
        <p>category selector</p>
        <p>Input to add items + button </p>
        
      <div>
        <div>filter</div>
        <p>List with items to Pack, items come here by default after adding via input (packed: false)</p>
        <div>filter</div>
        <p>List with packed items</p></div> 
      </div>
    </div> */}
    </>
  );
}

export default App;