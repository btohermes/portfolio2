import React from 'react';

import classes from './Toolbar.css';

import NavItems from '../NavItems/NavItems';
import MenuButton from '../../UI/MenuButton/MenuButton';

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.OnlyPhone}>
        <MenuButton />
      </div>
      <NavItems />
      <div className={classes.ShadowDiv} />
    </div>
  );
};

export default Toolbar;
