import React from 'react';

import classes from './Greeting.css';

const Greeting = props => {
  return (
    <div className={classes.image}>
      <p className={classes.p}>...Hello world</p>
      <p className={classes.p}>
        ...My name is Hermes<span className={classes.span}>_</span>
      </p>
    </div>
  );
};

export default Greeting;
