import React from 'react';

import NavItem from './NavItem/NavItem';
import MenuButton from '../../UI/MenuButton/MenuButton';
import classes from './NavItems.css';

const NavItems = props => {
  return (
    <div className={classes.NavItem__Wrapper}>
      <NavItem title='Who I am' />
      <NavItem title='Projects' />
    </div>
  );
};

export default NavItems;
