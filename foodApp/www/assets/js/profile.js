import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from "./firebase.js"


onAuthStateChanged(auth, async (user) => {
    console.log(user)
      if(user) { 
      const uid = user.uid;
       const username = user.displayName
       const email = user.email
      var elemnt =  document.querySelector('#prof-name')
      var elemnt1 =  document.querySelector('#prof-email')
        elemnt.innerHTML = username;
        elemnt1.innerHTML = email;
    }else{
        console.log('no funciono')
      }})
    