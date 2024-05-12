import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [inputValueFromChild, setInputValueFromChild] = useState('');

  //
  const handleInputFromChild = (value) => {
    setInputValueFromChild(value);
  };

  return (
    <div>
      <Child onInputChange={handleInputFromChild} />

      <p>Input value from child: {inputValueFromChild}</p>
    </div>
  );
}