import React, { Fragment } from 'react';

import NavItem from './NavItem/NavItem';

const NavItems = props => {
  return (
    <Fragment>
      <NavItem title='Button uno' />
      <NavItem title='Button dos' />
    </Fragment>
  );
};

export default NavItems;
