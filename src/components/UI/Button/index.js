// @flow
import React from 'react';

type Props = {
  click: () => void
}

const Button = (props): Props => {
  return (
    <button onClick={() => props.click()}>Next</button>
  );
};

export default Button;
