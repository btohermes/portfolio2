import React, { Component, Fragment } from 'react';

import classes from './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <main className={classes.Layout}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
