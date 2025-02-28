/* === Imports === */

/* === Firebase Setup === */

/* === UI === */
 
/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl= document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)


signInButtonEl.addEventListener("click", authSignWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWIthEmail)

/* === Main Code === */
showLoggedOutView()

