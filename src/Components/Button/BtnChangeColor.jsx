import React, { useState } from 'react';
import './BtnChangeColor.css'
const ColorChanger = () => {
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

 
  const changeColor = () => {
    const newColor = getRandomColor();
    document.documentElement.style.setProperty('--bg_Color', newColor);
  };

  return (
    <div>
      <button className="trocaCor" onClick={changeColor}>Cores</button>
      
    </div>
  );
};

export default ColorChanger;
