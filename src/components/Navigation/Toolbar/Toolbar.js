import React from 'react';

import classes from './Toolbar.css';

import NavItems from '../NavItems/NavItems';

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <NavItems />
    </div>
  );
};

export default Toolbar;
