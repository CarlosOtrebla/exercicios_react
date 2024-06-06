import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { InputTesk } from './Inputs/InputTesk/InputTesk';
import { ButtonAdd } from './Button/ButtonAdd';
import  {SearchField}  from './Inputs/SearchField/SearchField';
import {Clock} from './Clock/Clock';
import { UseLocalStorage } from './UseLocalStorage';
import ColorChanger from './Button/BtnChangeColor';


export const TodoList = () => {
  const list = [
    'Estudar React',
    'Estudar os Hooks do React',
    'Estudar Typescript',
    'Lembrar de tomar café',
  ];
  const [items, setItems] = UseLocalStorage('items',[...list]);
  const [newItem, setNewItem] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    savedItems && setItems(JSON.parse(savedItems));
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className='container'
    >
          <ColorChanger/>
        <h1>TODO-List</h1>
        <Clock/>
      <div  className='addTask'>
        <InputTesk
          className="filteredTesk"
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
      <SearchField items={items} setItems={setItems} />
    </div>
  );
};
