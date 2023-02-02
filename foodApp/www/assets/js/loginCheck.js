import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from "./firebase.js"


onAuthStateChanged(auth, async (user) => {
    console.log(user)
      if (user &&  window.location.pathname != "/main-home.html" && window.location.pathname != "/www/main-home.html" && window.location.pathname != "/profile.html" ) {
        const username = user.displayName
        window.location.href = "main-home.html"
      }else{
        if (user == null && window.location.pathname != "/login.html" && window.location.pathname != "/register.html" && window.location.pathname != "/onboard.html" && window.location.pathname != "/index.html")
          window.location.pathname = "login.html"
        } 

})

