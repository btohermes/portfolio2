import React from 'react';

import NavItem from './NavItem/NavItem';
import MenuButton from '../../UI/MenuButton/MenuButton';
import classes from './NavItems.css';

const NavItems = props => {
  return (
    <div className={classes.NavItem__Wrapper}>
      <a href='#whoAmI' className={classes.Anchor}>
        <NavItem title='My Story' />
      </a>
      <a href='#projects' className={classes.Anchor}>
        <NavItem title='Projects' />
      </a>
    </div>
  );
};

export default NavItems;
