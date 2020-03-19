import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCPCk54aekORa7AZXQ6_nucvAaPWmBkpik",
    authDomain: "tracka-cba73.firebaseapp.com",
    databaseURL: "https://tracka-cba73.firebaseio.com",
    projectId: "tracka-cba73",
    storageBucket: "tracka-cba73.appspot.com",
    messagingSenderId: "245860427041",
    appId: "1:245860427041:web:c59942b00b2e8455e68a60",
    measurementId: "G-YR70D8SRZR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
