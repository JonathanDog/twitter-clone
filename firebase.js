import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const clientCredentials = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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

