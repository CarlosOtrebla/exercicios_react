import React from 'react';
import './inputTesk.css'

export const InputTesk = ({ value, onChange, placeholder }) => {
  return (
    <input
      className='input'
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

