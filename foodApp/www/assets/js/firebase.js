  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
  import { getAuth} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"
  // import { getDatabase, ref, onValue }  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"    
    

 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBwtWOyTvSKPFtSRnRpE11OrUvX3bh5y8U",
    authDomain: "deliveryapp-ca6c5.firebaseapp.com",
    databaseURL: "https://project-bc60d.firebaseio.com",
    projectId: "deliveryapp-ca6c5",
    storageBucket: "deliveryapp-ca6c5.appspot.com",
    messagingSenderId: "478233782508",
    appId: "1:478233782508:web:ed7c52894a7ba9922c5dc9",
    measurementId: "G-K2TXB7V7BJ"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  // export const database = getDatabase(app)