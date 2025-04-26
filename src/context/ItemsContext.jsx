import { createContext, useContext, useReducer, useEffect } from "react";


const ItemsContext = createContext();


function itemsReducer(items, action){
  switch(action.type){
    case 'ADDITEM':
      return [
        ...items,
        {
          id: crypto.randomUUID(),
          name: action.name,
          category: action.category,
          packed: false,
        },
      ];
      case 'TOGGLEITEM':
        return items.map(item => item.id === action.id ? { ...item, packed: !item.packed } : item );
      
      case 'REMOVEITEM': 
        return items.filter(item => item.id !== action.id);

      case 'CLEARBYLIST':
        return items.filter(item => item.packed !== action.packed);

      case 'CLEARITEM':
        return [];
        
      default:
        throw new Error('Unknown action: ' + action.type);
  }
}

export function ItemsProvider({ children }) {
  const savedItems = JSON.parse(localStorage.getItem('items')) || [];
  const [items, dispatch] = useReducer(itemsReducer, savedItems);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return ( 
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  )
}

export function useItems() {
  return useContext(ItemsContext);
}