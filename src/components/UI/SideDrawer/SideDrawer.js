import React, { Fragment } from 'react';

import classes from './SideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <div className={attachedClasses}>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')} />
      </div>
    </Fragment>
  );
};

export default SideDrawer;
