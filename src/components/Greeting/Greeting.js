import React, { Component } from 'react';

import classes from './Greeting.css';
import MacTerminal from '../../containers/MacTerminal/MacTerminal';
import axios_joke from '../../axios-joke';

class Greeting extends Component {
  state = {
    joke: ''
  };

  componentDidMount() {
    axios_joke
      .get(
        'http://api.icndb.com/jokes/random?firstName=Hermes&lastName=Brito&limitTo=[nerdy]'
      )
      .then(response => {
        console.log(response.data.value.joke);
        this.setState({ joke: response.data.value.joke });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={classes.image}>
        <MacTerminal joke={this.state.joke} />
      </div>
    );
  }
}

export default Greeting;
