import React from 'react';

import classes from './Greeting.css';
import MacTerminal from '../../containers/MacTerminal/MacTerminal';

const Greeting = props => {
  return (
    <div className={classes.image}>
      <MacTerminal />
    </div>
  );
};

export default Greeting;
