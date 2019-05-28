import React, { Fragment } from 'react';

import classes from './ContactLink.css';

const ContactLink = props => {
  return (
    <Fragment>
      <div className={classes.ContactLink}>
        <a href={props.links} className={classes.A}>
          <i className={props.iconClass} />
        </a>
      </div>
    </Fragment>
  );
};

export default ContactLink;
