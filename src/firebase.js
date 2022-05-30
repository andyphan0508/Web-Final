import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoIOyc-PmZeDGf19S6qbNA7ivtno-ptMU",
  authDomain: "tweetdatabase2022.firebaseapp.com",
  projectId: "tweetdatabase2022",
  storageBucket: "tweetdatabase2022.appspot.com",
  messagingSenderId: "1068176465196",
  appId: "1:1068176465196:web:ee9741cdae743fe2c1e089",
  measurementId: "G-C7G41X4RWV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCoIOyc-PmZeDGf19S6qbNA7ivtno-ptMU",
//   authDomain: "tweetdatabase2022.firebaseapp.com",
//   projectId: "tweetdatabase2022",
//   storageBucket: "tweetdatabase2022.appspot.com",
//   messagingSenderId: "1068176465196",
//   appId: "1:1068176465196:web:ee9741cdae743fe2c1e089",
//   measurementId: "G-C7G41X4RWV",
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export default { auth, db };
