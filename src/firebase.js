import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDojiwUYLzDuvh-CtkModegEyRLmezYKvc",
    authDomain: "linked-in-clone-64b8d.firebaseapp.com",
    projectId: "linked-in-clone-64b8d",
    storageBucket: "linked-in-clone-64b8d.appspot.com",
    messagingSenderId: "476066988900",
    appId: "1:476066988900:web:78dabc05510e2b1d3d3071"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };