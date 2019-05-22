import React from 'react';

import classes from './Technologies.css';
import Techology from '../../components/Technology/Technology';

const Technologies = props => {
  return (
    <div className={classes.Technologies}>
      <div className={classes.Technologies__fullWidth}>
        Technologies I've Used
      </div>
      <div className={classes.Technologies__fullWidth}>
        <Techology />
      </div>
      <div className={classes.Technologies__Center}>
        <Techology />
      </div>
      <div className={classes.Technologies__Center_1}>
        <Techology />
      </div>
      <div className={classes.Technologies__Center_2}>
        <Techology />
      </div>
    </div>
  );
};

export default Technologies;
