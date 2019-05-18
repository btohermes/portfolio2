import React, { Fragment } from 'react';

import classes from './ReactNote.css';

const ReactNote = props => {
  return (
    <Fragment>
      <div className={classes.ReactNote}>
        <div className={classes.Text}>This site was developed with</div>
        <div className={classes.Link}>
          <a href={'https://reactjs.org/'} className={classes.a}>
            <i className={'fab fa-react'} />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ReactNote;
