import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBaMXR4qAxspEGHrlpIekbsAfEjyi7OoiM",
    authDomain: "mymoney-cb829.firebaseapp.com",
    projectId: "mymoney-cb829",
    storageBucket: "mymoney-cb829.appspot.com",
    messagingSenderId: "272045133329",
    appId: "1:272045133329:web:5d2c4e5ae9b0e7d2d1abb0"
};


firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()



const projectAuth = firebase.auth()


const timestamp = firebase.firestore.Timestamp
export { projectFirestore, projectAuth, timestamp }


