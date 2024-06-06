import React, { useState } from 'react';
import './BtnChangeColor.css';
const ColorChanger = () => {

  const [cor, setCor] = useState();
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  const changeColor = () => {
    const newColor =  getRandomColor()
    setCor( newColor);
    document.documentElement.style.setProperty('--bg_Color', newColor);    
  };

  return (
    <div>
      <button id='nColor' className='trocaCor' onClick={changeColor}>
       {cor}
      </button>
    </div>
  );
};

export default ColorChanger;
