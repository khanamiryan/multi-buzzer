import React, { Fragment } from 'react';
import Timer from '../Timer';
import Buzzers from '../Buzzers';

const BeFirst = () => (
  <Fragment>
    <header className="App-header">
      <Timer />
    </header>
    <Buzzers />
  </Fragment>
);

export default BeFirst;