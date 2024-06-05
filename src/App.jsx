import { useState } from 'react';
import './App.css';
import ItemList from './Components/ItemList';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <ItemList/>
      </div>
    </>
  );
}

export default App;