import './App.css';
import { useState } from 'react';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToStack = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  const removeFromStack = (index) => {
    const newStack = stack.slice();
    newStack.splice(index, 1);
    setStack(newStack);
  };

  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <section>
        <h2>Available Ingredients</h2>
        <IngredientList ingredients={availableIngredients} addToStack={addToStack} />
      </section>
      <section>
        <h2>Your Burger Stack</h2>
        <BurgerStack stack={stack} removeFromStack={removeFromStack} />
      </section>
    </main>
  );
};

export default App;
