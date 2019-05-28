import React from 'react';
import classes from './MeCard.css';

const MeCard = props => {
  const clipClasses = [classes.MeCard, classes.MeCard__Clip];
  return (
    <div id='whoAmI'>
      <div className={classes.MeCard}>
        <div className={classes.Img} />
        <div className={classes.Clip}>
          <div>About me</div>
          <p>
            Outsystems developer with 2 years of experience.
            <br />
            But in love with front-end technologies.
            <br />
            Trying to change my life. To do something I love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeCard;
