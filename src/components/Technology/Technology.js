import React from 'react';

import classes from './Technology.css';
import icon from '../../assets/images/css.png';

const Technology = props => {
  return (
    <div className={classes.Technology}>
      <img src={icon} alt={props.alt} className={classes.Technology} />
    </div>
  );
};

export default Technology;

//<img src={props.Technology} alt={props.alt} />
