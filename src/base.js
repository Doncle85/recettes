import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDT8qvoPYpsJiIC1Hmu5EAAuKo6yCi6rs8",
    authDomain: "recettes-939ca.firebaseapp.com",
    databaseURL: "https://recettes-939ca-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base