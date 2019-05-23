import React, { Component, Fragment } from 'react';

import Context from '../../context/context';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Greeting from '../../components/Greeting/Greeting';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../Projects/Projects';

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
          {/* <Backdrop
            show={this.state.showSideDrawer}
            clicked={this.sideDrawerCloseHandler}
          /> */}
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerCloseHandler}
          />
        </Context.Provider>
        <AboutMe />
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
