import { useState } from 'react';
import './App.css';
import { TodoList } from './Components/TodoList';


export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <TodoList/>
    </div>
  );
}
