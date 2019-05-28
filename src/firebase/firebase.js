import firebase from 'firebase';
import 'firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyB1r-Iui2j7riIvs9eEiWrffKlbyyt9YeM',
    authDomain: 'myportfolio-f671e.firebaseapp.com',
    databaseURL: 'https://myportfolio-f671e.firebaseio.com',
    projectId: 'myportfolio-f671e',
    storageBucket: 'myportfolio-f671e.appspot.com',
    messagingSenderId: '235824234658',
    appId: '1:235824234658:web:a5c82d3c3057f669'
  });
}
const db = firebase.database();
const storage = firebase.storage().ref();

export { storage, db };
