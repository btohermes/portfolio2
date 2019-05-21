import React from 'react';
import classes from './MeCard.css';

const MeCard = props => {
  const clipClasses = [classes.MeCard, classes.MeCard__Clip];
  return (
    <div>
      <div className={classes.MeCard}>
        <div className={classes.Img} />
        <div className={classes.Clip} />
      </div>
    </div>
  );
};

export default MeCard;
