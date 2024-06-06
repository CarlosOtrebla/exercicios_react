import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './ButtonAdd.css'

export function ButtonAdd({ items, setItems, newItem, setNewItem }) {

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <button className='btnAddTask' onClick={addItem}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}
