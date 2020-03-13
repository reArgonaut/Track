import Firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCPCk54aekORa7AZXQ6_nucvAaPWmBkpik",
  authDomain: "tracka-cba73.firebaseapp.com",
  databaseURL: "https://tracka-cba73.firebaseio.com",
  projectId: "tracka-cba73",
  storageBucket: "tracka-cba73.appspot.com",
  messagingSenderId: "245860427041",
  appId: "1:245860427041:web:c59942b00b2e8455e68a60",
  measurementId: "G-YR70D8SRZR"
};
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();