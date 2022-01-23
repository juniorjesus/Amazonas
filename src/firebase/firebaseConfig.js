import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAiVikk5XFATzGhRPbVxMh7G_RZ1coYGhc",
  authDomain: "as-app-46156.firebaseapp.com",
  projectId: "as-app-46156",
  storageBucket: "as-app-46156.appspot.com",
  messagingSenderId: "179244715751",
  appId: "1:179244715751:web:567c8fc9ddc4184fb35c42"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const google = new GoogleAuthProvider();
const facebook =  new FacebookAuthProvider();


export {
  app,
  db,
  google,
  facebook
}

//firebasev9 prj en firebase.com
// const firebaseConfig = {
//   apiKey: "AIzaSyCwmQMmRT6ke4JGbw9E-zxN9oClR5yp-9M",
//   authDomain: "login2-33276.firebaseapp.com",
//   projectId: "login2-33276",
//   storageBucket: "login2-33276.appspot.com",
//   messagingSenderId: "270101613027",
//   appId: "1:270101613027:web:38e1a18b25581cee8df8d6"
// };
// const app = initializeApp(firebaseConfig);
// const google =  new GoogleAuthProvider();
// const facebook =  new FacebookAuthProvider();
// const db = getFirestore();

// export{
//     app,
//     google,
//     facebook,
//     db
// }