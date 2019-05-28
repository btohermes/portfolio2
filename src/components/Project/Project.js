import React from 'react';

import classes from './Project.css';
//import image from '../../assets/images/OtherMe.jpg';

const Project = props => {
  console.log(props);

  return (
    <div className={classes.Project}>
      <div className={classes.Project__Title}>{props.title}</div>

      <img src={props.img} alt='img' className={classes.Project__Img} />

      <div className={classes.Projet__Summary}>{props.description}</div>
    </div>
  );
};

export default Project;
