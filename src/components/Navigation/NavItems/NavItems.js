import React, { Fragment } from 'react';

import NavItem from './NavItem/NavItem';

const NavItems = props => {
  return (
    <Fragment>
      <NavItem title='Who I am' />
      <NavItem title='Projects' />
    </Fragment>
  );
};

export default NavItems;
