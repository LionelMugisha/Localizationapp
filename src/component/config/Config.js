import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHLbZbpNuts_mk0auCWQHzvsAz8ZwQzh0",
  authDomain: "localizeapp-c0c37.firebaseapp.com",
  projectId: "localizeapp-c0c37",
  storageBucket: "localizeapp-c0c37.appspot.com",
  messagingSenderId: "693616735056",
  appId: "1:693616735056:web:c69a1ceae4916af825b255"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const fs = firebase.firestore();

export { auth, fs }