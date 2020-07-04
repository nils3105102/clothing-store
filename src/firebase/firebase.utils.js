import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzTUeFgNz2q_aLDMVMXqk0FA6u_WsAv2g",
    authDomain: "clothing-store-3b85c.firebaseapp.com",
    databaseURL: "https://clothing-store-3b85c.firebaseio.com",
    projectId: "clothing-store-3b85c",
    storageBucket: "clothing-store-3b85c.appspot.com",
    messagingSenderId: "526906348681",
    appId: "1:526906348681:web:6ba640193df128184b2258"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;