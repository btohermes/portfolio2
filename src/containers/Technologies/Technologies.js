import React from 'react';

import classes from './Technologies.css';
import Techology from '../../components/Technology/Technology';
import htm_css_js from '../../assets/images/HTML_CSS_JS.png';
import react from '../../assets/images/React.png';
import node from '../../assets/images/NODE.png';
import my_sql from '../../assets/images/MY_SQL.png';
import sql_server from '../../assets/images/SQL_Server.png';

const Technologies = props => {
  return (
    <div className={classes.Technologies}>
      <div className={classes.Technologies__title}>Technologies I know</div>
      <img
        src={htm_css_js}
        alt='Html-Css-Javascript'
        className={classes.Technologies__img_html}
      />
      <img
        src={node}
        alt='Html-Css-Javascript'
        className={classes.Technologies__img_node}
      />
      <img
        src={react}
        alt='Html-Css-Javascript'
        className={classes.Technologies__img_mySql}
      />
      <img
        src={my_sql}
        alt='Html-Css-Javascript'
        className={classes.Technologies__img_sqlServer}
      />
      <img
        src={sql_server}
        alt='Html-Css-Javascript'
        className={classes.Technologies__img_react}
      />
    </div>
  );
};

export default Technologies;

//<div className={classes.Technologies}>
//   <div className={classes.Technologies__fullWidth}>
//     Technologies I've Used
//   </div>
//   <div className={classes.Technologies__fullWidth}>
//     <Techology src={htm_css_js} />
//   </div>
//   <div className={classes.Technologies__Center}>
//     <Techology src={node} />
//   </div>
//   <div className={classes.Technologies__Center_1}>
//     <Techology src={my_sql} />
//   </div>
//   <div className={classes.Technologies__Center_2}>
//     <Techology src={sql_server} />
//   </div>
// </div>
