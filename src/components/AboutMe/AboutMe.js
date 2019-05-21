import React from 'react';

import classes from './AboutMe.css';

import MeCard from '../MeCard/Mecard';
import Technologies from '../../containers/Technologies/Technologies';

const ComponentName = props => {
  return (
    <div className={classes.AboutMe}>
      <MeCard />
      <Technologies />
    </div>
  );
};

export default ComponentName;
