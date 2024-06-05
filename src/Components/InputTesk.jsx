import React from 'react';
import ItemList from './ItemList';

export const InputTesk = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="inputTesk"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

