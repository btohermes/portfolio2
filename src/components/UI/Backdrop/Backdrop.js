import React from 'react';

import classes from './Backdrop.css';

const backdrop = props =>
  props.show ? (
    <div
      className={[classes.Backdrop, classes.Open].join(' ')}
      onClick={props.clicked}
    />
  ) : (
    <div className={[classes.Backdrop, classes.Close].join(' ')} />
  );

export default backdrop;
