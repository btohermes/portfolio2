import React, { Fragment } from 'react';

import classes from './AboutMe.css';

import MeCard from '../MeCard/Mecard';
import Technologies from '../../containers/Technologies/Technologies';
import SectionTitle from '../SectionTitle/SectionTitle';

const ComponentName = props => {
  return (
    <Fragment>
      <div id='whoAmI'>
        <SectionTitle Title='My Story' />
        <div className={classes.AboutMe}>
          <MeCard />
          <Technologies />
        </div>
      </div>
    </Fragment>
  );
};

export default ComponentName;
