import React, { useState, useEffect } from 'react';
import "./clock.css"

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='clock'>
      {currentTime.toLocaleTimeString()}
    </div>
  );
};


