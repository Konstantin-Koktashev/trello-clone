import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7dj_RsoGNfrsUVGrF-LbP0uUT4C4YoNk",
  authDomain: "trello-clone-ecad1.firebaseapp.com",
  projectId: "trello-clone-ecad1",
  storageBucket: "trello-clone-ecad1.appspot.com",
  messagingSenderId: "914620767240",
  appId: "1:914620767240:web:a9f437786efd61057d45bd"
};
firebase.initializeApp(firebaseConfig);
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;