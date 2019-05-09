import React, { Component, Fragment } from 'react';

import classes from './MacTerminal.css';

class MacTerminal extends Component {
  date = new Date().toString();

  handleKeyPress = event => {
    console.log('Hello');
  };

  render() {
    return (
      <Fragment>
        <div className={classes.MacTerminal} onKeyPress={this.handleKeyPress}>
          <div className={classes.MacTerminal__head}>
            <div className={classes.dotRed} />
            <div className={classes.dotYellow} />
            <div className={classes.dotGreen} />
          </div>
          <div className={classes.MacTerminal__Body}>
            <div>Last login:{this.date}</div>
            <div>Hello world!</div>
            <div>My name is Hermes. I am a software developer</div>
            <div>Please Press any key to continue</div>
            <div>
              ><span className={classes.flicker}>_</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MacTerminal;
