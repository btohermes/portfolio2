import React, { Component, Fragment } from 'react';

import classes from './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Greeting from '../../components/Greeting/Greeting';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <Greeting />
      </Fragment>
    );
  }
}

export default Layout;
