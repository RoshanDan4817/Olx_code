import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBYj3o6FFG8gqt3wZtF7gXVmBwBNT38k5s",
  authDomain: "olx-india-backup.firebaseapp.com",
  projectId: "olx-india-backup",
  storageBucket: "olx-india-backup.appspot.com",
  messagingSenderId: "856904234118",
  appId: "1:856904234118:web:1e80f0a22c8ed69e108d07",
  measurementId: "G-KJVM895X4K"
};

export default firebase.initializeApp(firebaseConfig)