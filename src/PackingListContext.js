import React, {createContext, useReducer} from 'react'
import { categories } from './data/categories';

const initialState = {
  items: [],
  selectedCategory: 'Clothes',
  filterCategory: 'All',
  showPacked: 'all'
};

function packingListReducer(itemsadded, action) {
  switch (action.type) {
    case 'ADDITEM':
       const newItem = {
        id: Date.now(),
        name: action.name,
       }
  }
}