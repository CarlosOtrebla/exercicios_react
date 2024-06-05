import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { InputTesk } from './InputTesk';
import { ButtonAdd } from './Button/ButtonAdd';

export const ItemList = () => {
  const list = [
    'Estudar React',
    'Estudar os Hooks do React',
    'Estudar Typescript',
    'Lembrar de tomar café',
  ];
  const [items, setItems] = useState([...list]);
  const [newItem, setNewItem] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    savedItems && setItems(JSON.parse(savedItems));
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className='container'>
      <div className='addTask'>
        <h1>TODO-List</h1>
        <div className='clock'>
          Hora atual: {currentTime.toLocaleTimeString()}
        </div>
        <InputTesk
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder='Adicione nova tarefa'
        />
        <ButtonAdd
          items={items}
          setItems={setItems}
          newItem={newItem}
          setNewItem={setNewItem}
        />
      </div>
      <ol className='tasks'>
        {items.map((item, index) => (
          <li className='task' key={index}>
            {item}
            <FontAwesomeIcon
              icon={faTrashArrowUp}
              className='btnRemoveTask'
              onClick={() => removeItem(index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};


