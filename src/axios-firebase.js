import axios from 'axios';

const axios_firebase = axios.create({
  baseURL: 'https://myportfolio-f671e.firebaseio.com/Project'
});

export default axios_firebase;
