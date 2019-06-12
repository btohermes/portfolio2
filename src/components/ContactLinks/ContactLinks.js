import React from 'react';
import ContactLink from './ContactLink/ContactLink';
import classes from './ContactLinks.css';

const ContactLinks = props => {
  return (
    <div className={classes.ContactLinks}>
      <ContactLink
        className={classes.Link}
        iconClass={'fab fa-linkedin-in'}
        links={'https://www.linkedin.com/in/hermes-brito-587201122/'}
      />
      <ContactLink
        iconClass={'fab fab fa-github'}
        links={'https://github.com/btohermes'}
      />
      {/* <ContactLink
        iconClass={'fab fa-twitter'}
        links={'https://twitter.com/Hermes34213439'}
      /> */}
    </div>
  );
};

export default ContactLinks;
