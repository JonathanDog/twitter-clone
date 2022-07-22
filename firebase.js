import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const clientCredentials = {
    apiKey: "AIzaSyDqOTGLPPzG_wEgzoOaZr9GSzl1ToVQw6w",
    authDomain: "websockets-ae419.firebaseapp.com",
    projectId: "websockets-ae419",
    storageBucket: "websockets-ae419.appspot.com",
    messagingSenderId: "444438905263",
    appId: "1:444438905263:web:3ae971ca338adca3732f5a"
}
let app; 
try {
  app = initializeApp(clientCredentials)
   
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const db = getFirestore(app)

export { db }

