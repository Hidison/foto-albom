import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkR1Q5lfBtlwNRMxBC6iDx0e_JiXRxtEo",
  authDomain: "fotoalbom-1fd85.firebaseapp.com",
  projectId: "fotoalbom-1fd85",
  storageBucket: "fotoalbom-1fd85.appspot.com",
  messagingSenderId: "1066284231517",
  appId: "1:1066284231517:web:ed6c008bb3268bd4a796b4",
};

firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appFirestore, timestamp };
