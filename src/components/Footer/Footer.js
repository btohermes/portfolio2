import React from 'react';

import classes from './Footer.css';

import ConcactLinks from '../ContactLinks/ContactLinks';
import ReactNote from './ReactNote/ReactNote';

const ComponentName = props => {
  return (
    <div className={classes.Footer}>
      <ConcactLinks />
      <ReactNote />
    </div>
  );
};

export default ComponentName;
