import firebase from 'firebase'
import { auth } from '../firebaseAuthData'

export const startFirebase = () => {
  const firebaseConfig = {
    apiKey: auth.apiKey,
    authDomain: auth.authDomain,
    databaseURL: auth.databaseURL,
    projectId: auth.projectId,
    storageBucket: auth.storageBucket,
    messagingSenderId: auth.messagingSenderId,
    appId: auth.appId 
  }
  
  firebase.initializeApp(firebaseConfig)
}