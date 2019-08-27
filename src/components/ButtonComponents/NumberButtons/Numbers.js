import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton'
import { numbers } from '../../../data';
//Import your array data to from the provided data file

const Numbers = (prop) => {
  const [numberState, setNumberState] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div className='nums'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        numberState.map(number => 
          <NumberButton key={number} text={number} addNum={prop.addNum}/>
        )
      }
    </div>
  );
};

export default Numbers;