
  var firebaseConfig = {
    apiKey: "AIzaSyBnlmUBz1i1fZzYKWyonvLXNYAz5w5gIbw",
    authDomain: "brand-baptiste.firebaseapp.com",
    databaseURL: "https://brand-baptiste.firebaseio.com",
    projectId: "brand-baptiste",
    storageBucket: "brand-baptiste.appspot.com",
    messagingSenderId: "23203165211",
    appId: "1:23203165211:web:d677fd5eac909f23c674be"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
   //Code for getting element
const signUp = document.getElementById('sign-up');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('pass-input');
const passCInput = document.getElementById('pass-confirm-input');
const nameInput = document.getElementById('full-name');
const signIn = document.getElementById('sign-in');
const signOut = document.getElementById('sign-out');

 signIn.addEventListener('click', onSignIn);
 function onSignIn (e) {
  e.preventDefault();
  const email = emailInput.value;
  const pass = passInput.value;

  if(email === '' || pass === '') {
    document.querySelector('.alert').innerHTML = 'Please write correct email and password';
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
  } else {
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    console.log('yes');
    window.location.href = "../pages/blog2.html";
  }

};

// signOut.addEventListener('click', e => {
// signOut(){
// console.log('hiii')
// }
// })

firebase.auth().onAuthStateChange( function(user) {
   if(user) {
     var email = user.email;
     alert("Active " + email);
     window.location.href = "../pages/blog2.html";
    //  signOut.style.display = 'block';
   } else {
    alert("No Active user ");
     console.log('not logged in')
   }
 });
  

 











  
//   if(nameFull === '') {
//   setErrorFor(nameFull, 'Please insert full name')
//   } else {
// setSuccess(nameFull)
//   }

// }





//
