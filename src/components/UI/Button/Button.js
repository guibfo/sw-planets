import React from 'react';

import styles from './Button.scss';

const Button = (props) => {
  return (
    <button className={styles['btn-next']} onClick={() => props.click()}>Next</button>
  );
};


export default Button;
