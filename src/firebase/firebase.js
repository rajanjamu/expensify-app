import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// export const addExpenseToFirebase = (expense) => {
//   return database.ref('expenses').push(expense);
// };

// // Listen to CHILD_REMOVED
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// // Listen to CHILD_CHANGED
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });

// // Listen to CHILD_ADDED
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// const expenses = [
//   {
//     description: 'Rent',
//     amount: 4500,
//     note: 'This month rent',
//     createdAt: 100,
//   },
//   {
//     description: 'Water Bill',
//     amount: 200,
//     note: '',
//     createdAt: 200,
//   },
//   {
//     description: 'Electricity bill',
//     amount: 5000,
//     note: 'Mar month bill paid',
//     createdAt: 300,
//   },
// ];

// expenses.map((expense) => {
//   database.ref('expenses').push(expense);
// });
