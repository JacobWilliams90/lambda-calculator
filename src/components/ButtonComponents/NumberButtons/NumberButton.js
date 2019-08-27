import React from "react";

const NumberButton = prop => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => prop.addNum(prop.text)}>{prop.text}</button>
    </>
  );
};

export default NumberButton;