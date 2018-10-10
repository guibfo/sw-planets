// @flow
import React, { Fragment } from 'react';

import loadingImg from '../../../assets/images/vader-loading.gif';

const Loader = () => (
  <Fragment>
    <div><img src={loadingImg} alt='loading' /></div>
    <div>Wait while loading planets...</div>
  </Fragment>
);

export default Loader;
