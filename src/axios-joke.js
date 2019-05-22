import axios from 'axios';

// http://api.icndb.com/jokes/random?firstName=Hermes&lastName=Brito&limitTo=[nerdy]

const axios_joke = axios.create({
  baseURL: 'http://api.icndb.com/jokes/'
});

export default axios_joke;
