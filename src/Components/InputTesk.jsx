import React from 'react';


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

