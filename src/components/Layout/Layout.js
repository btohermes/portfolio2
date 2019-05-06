import React, { Fragment } from 'react';

import classes from './Layout.css';

const Layout = props => {
  return (
    <Fragment>
      <div className={classes.Layout}>Menu, Home, Projects</div>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
