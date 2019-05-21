import React from 'react';

import classes from './Technologies.css';
import Techology from '../../components/Technology/Technology';

const Technologies = props => {
  return (
    <div className={classes.Technologies}>
      <div>Technologies I've Used</div>
      <Techology />
      <Techology />
      <Techology />
      <Techology />
    </div>
  );
};

export default Technologies;
