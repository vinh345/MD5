import React, { useState } from 'react';

export default function Child({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} 
        placeholder="Enter value..."
      />
    </div>
  );
}