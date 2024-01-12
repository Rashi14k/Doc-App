import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCX_Po95BfoAjY30dOmxdg326eHOxMMJqA",
    authDomain: "app-61cb8.firebaseapp.com",
    projectId: "app-61cb8",
    storageBucket: "app-61cb8.appspot.com",
    messagingSenderId: "1020295219361",
    appId: "1:1020295219361:web:37618d11a5ee671fa5c8e0",
    measurementId: "G-GBQ5DCYR8V"
  };
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app)