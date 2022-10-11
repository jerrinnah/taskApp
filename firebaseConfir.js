import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: 'AIzaSyDZXHvYrP53yMq0wLw80SqiH74AyzOnL-Q',
  authDomain: 'taskapp-8c7b9.firebaseapp.com',
  projectId: 'taskapp-8c7b9',
  storageBucket: 'taskapp-8c7b9.appspot.com',
  messagingSenderId: '999526843996',
  appId: '1:999526843996:web:13f280b8d49b383f8bc899',
  measurementId: 'G-19KNYPXZ2B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebase };
