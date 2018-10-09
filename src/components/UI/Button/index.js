// @flow
import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.click()}>Next</button>
  );
};

export default Button;
