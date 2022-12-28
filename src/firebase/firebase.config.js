// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    //   apiKey: "AIzaSyC9nOFq353_FyOgWU8vqVHNHe8m4NFdAqQ",
    //   authDomain: "appointmentmenagementsystem.firebaseapp.com",
    //   projectId: "appointmentmenagementsystem",
    //   storageBucket: "appointmentmenagementsystem.appspot.com",
    //   messagingSenderId: "338063336913",
    //   appId: "1:338063336913:web:dfde94e11c54e6a755acf0"
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;