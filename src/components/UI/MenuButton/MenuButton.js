import React from 'react';

import classes from './MenuButton.css';
import Context from '../../../context/context';
import NavItems from '../../Navigation/NavItems/NavItems';

const ComponentName = props => {
  return (
    <Context.Consumer>
      {MenuButtonAction => {
        return (
          <div
            className={classes.Container}
            onClick={MenuButtonAction.MenuToggle}
          >
            <div className={classes.Bar} />
            <div className={classes.Bar} />
            <div className={classes.Bar} />
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default ComponentName;
