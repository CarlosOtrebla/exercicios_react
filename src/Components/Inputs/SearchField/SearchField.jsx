import React, { useState, useEffect } from 'react';
import { TodoList } from '../../TodoList';
import './searchField.css'

export function SearchField() {
  const [items, setItems] = useState([]);
  
  const [search, setSearch] = useState('');

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    savedItems && setItems(JSON.parse(savedItems));
  }, []);

  const filteredItems = search.length > 0
  ? items.filter(item => item.includes(search)):[];

  return (
    <div>
      <input
      className='input' 
      type='text' name='search' id='search' placeholder='Buscar...'
      onChange={e => setSearch(e.target.value)}
      value={search} />
      
      {search.length > 0 ? (
        <ul>
          {filteredItems.map(item => {
              return (
                <li className='filteredTesk' key={item}>
                  {item}
                </li>
              )              
            })
          }
        </ul>
      ):(      
        <ul>        
          {items.map(item => {
            return (
              <li className='filteredTesk' key={item}>
                {item}
              </li>
            )
        })}
      
        </ul>
      )}
    </div>
  )
}
