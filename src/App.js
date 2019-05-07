import React from 'react';

import classes from './App.css';

import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </Layout>
    </div>
  );
}

export default App;
