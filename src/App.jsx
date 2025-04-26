import React, { useState } from 'react';
import AddItemInput from './components/AddItemInput';
import ItemList from './components/ItemList';
import CategorySelection from './components/CategorySelection';
import ItemsFilter from './components/ItemsFilter';
import { ItemsProvider } from './context/ItemsContext';


function App() {
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <>
    <ItemsProvider>
    <div className='min-h-screen bg-lime-50 text-stone-600 p-4'>
      <div className='max-w-7xl mx-auto space-y-6'>
        <h1 className='text-3xl font-bold text-center text-lime-500'>Packing List Helper</h1>
        <AddItemInput />
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <ItemList packed={false} selectedFilter={selectedFilter} />
          </div>
          <div>
            <ItemList packed={true} selectedFilter={selectedFilter}/>
          </div>
        </div>
      </div>
    </div>
    </ItemsProvider>
    </>
  );
}

export default App;