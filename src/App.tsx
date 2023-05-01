import { useState } from 'react';
import './App.css';
import { Item } from './models/item';
import ShoppingList from './components/ShoppingList';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  // const items = [
  //   { id: 1, product: 'Lemon', quantity: 3 },
  //   { id: 2, product: 'Chicken Breast', quantity: 3 },
  // ];

  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
