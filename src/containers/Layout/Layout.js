import React, { Component, Fragment } from 'react';

import Context from '../../context/context';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Greeting from '../../components/Greeting/Greeting';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !this.state.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Context.Provider
          value={{
            MenuToggle: this.sideDrawerToggleHandler,
            showSideDrawer: this.state.showSideDrawer
          }}
        >
          <Toolbar />
          <Greeting />
          <Backdrop
            show={this.state.showSideDrawer}
            clicked={this.sideDrawerCloseHandler}
          />
          <SideDrawer>
            open={this.state.showSideDrawer}
            closed={this.sideDrawerCloseHandler}
          </SideDrawer>
        </Context.Provider>
      </Fragment>
    );
  }
}

export default Layout;
