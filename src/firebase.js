// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDIgMdLE-ovpLEMqq-cOTZu3hLmX-3NFJI",
  authDomain: "newapp-640af.firebaseapp.com",
  databaseURL: "https://newapp-640af.firebaseio.com",
  projectId: "newapp-640af",
  storageBucket: "newapp-640af.appspot.com",
  messagingSenderId: "248495356422"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
