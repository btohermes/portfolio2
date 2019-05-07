import React, { Fragment } from 'react';

import classes from './NavItem.css';

const NavItem = props => {
  return (
    <Fragment>
      <div className={classes.NavItem}>{props.title}</div>
      <div className={classes.NavItem__underline} />
    </Fragment>
  );
};
export default NavItem;
