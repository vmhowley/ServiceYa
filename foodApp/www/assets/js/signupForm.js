import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"      
import { updateProfile } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"      
const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
e.preventDefault()

    const username = signupForm['signup-username'].value
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value   
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        updateProfile(auth.currentUser, {
          displayName: username, photoURL: ""});
        sendEmailVerification(userCredentials.user);
        console.log( "Email verification sent!");
        window.location.href = "location-page.html";
    } catch (error) {
        console.log(error)
    }
  })


