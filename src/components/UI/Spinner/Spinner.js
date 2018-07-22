import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import styles from './Spinner.scss';
import loadingImg from '../../../assets/images/vader-loading.gif';

const Spinner = () => (
    <Aux>
      <div className={styles['loading-img']}><img src={loadingImg} alt='loading' /></div>
      <div className={styles['loading-text']}>Wait while loading planets...</div>
    </Aux>
);

export default Spinner;
