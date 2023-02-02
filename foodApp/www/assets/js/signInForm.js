import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from "./firebase.js"

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signInForm['login-email'].value
    const password = signInForm['login-password'].value

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
        window.location.href = "main-home.html"
    } catch (error) {
        alert(error)
    }
})