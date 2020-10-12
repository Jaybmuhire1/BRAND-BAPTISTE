


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
const db = firebase.firestore();
 

//Sign in
const loginForm = document.getElementById('login-form');
const account = document.getElementById('account');

loginForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const emailInput = document.getElementById('email-input');
 const passInput = document.getElementById('pass-input');
 const email = emailInput.value;
 const pass = passInput.value;
 var regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


 if (!regx.test(email)) {
   document.querySelector('.alert').style.display = 'block';
   document.querySelector('.alert').innerHTML = 'Please validate your email';
   setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
   return false;
 } else 

 if(email === '') {
   document.querySelector('.alert').style.display = 'block';
   document.querySelector('.alert').innerHTML = 'Please fill in the email';
   setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
   return false;
 } else if(pass === '') {
   document.querySelector('.alert').style.display = 'block';
   document.querySelector('.alert').innerHTML = 'Please insert password';
   setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);

 } else if (pass.length < 6) {
   document.querySelector('.alert').style.display = 'block';
   document.querySelector('.alert').innerHTML = 'Password must have atleast 6 characters';
   setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
   return false;

 }  else {
   const promise = auth.signInWithEmailAndPassword(email, pass);
   promise.then((val) => {
   window.location.href = "../pages/createpost.html";
   document.querySelector('.alert').style.display = 'block';
   document.querySelector('.alert').style.backgroundColor = '#008000';
   document.querySelector('.alert').innerHTML = 'Please insert password';
   setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
   });
   promise.catch(e => {
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').innerHTML = 'Please use the correct password';
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
     console.log(e.message)});
   
 }

});

auth.onAuthStateChanged(user =>{
  if(user){
    const html = `
    <div>Logged in as ${user.email} </div>`
    account.innerHTML = html;

    console.log('user logged in',user)
  } else {
    console.log('user logged out')
  } 
}) 

//Sign out
const signOut = document.querySelector('#logout-btn');
signOut.addEventListener('click', (e) =>{
  e.preventDefault();
  auth.signOut().then(() => {
    // window.location.href ="../index.html";
    console.log('user has logged out')
  })
});


//signup


   var regx = /^[a-zA-Z]{2,}$/
   const signUpForm = document.getElementById('sign-up-form');
   signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // const emailInput = document.getElementById('email-input');
  // const passInput = document.getElementById('pass-input');
  // const passCInput = document.getElementById('pass-confirm-input');
  // const nameInput = document.getElementById('full-name');

   const nameFull = signUpForm[full-name].value;
   const email = signUpForm[email-input].value;
   const pass = signUpForm[pass-input].value;
   const passConfirmInput = signUpForm[passconfirm-input].value;

if(nameFull === '' || email === '' || pass === '' || passConfirmInput === '') {
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').innerHTML = 'Please fill the below input';
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);

  } else if (pass !== passConfirmInput){
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').innerHTML = 'password does not match';
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
  } else if (!regx.test(nameFull)) {
      document.querySelector('.alert').style.display = 'block';
      document.querySelector('.alert').innerHTML = 'Please correct your name';
      setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
      return false;
  } else {

    const promise = auth.createUserWithEmailAndPassword(email, pass)
    promise.then(cred => {
      console.log(cred);
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').innerHTML = 'You have registered';
    setTimeout(function() {window.location.href = "../pages/login.html";}, 3000)
  });
  promise.catch (e =>{
    console.log(e);
  });

  }
  }
   )

     //Signout 

//   signOut.addEventListener('click', (e) =>{
//     e.preventDefault();
//     auth.signOut().then(() => {
//       console.log('user has signed out')
//     })
//   });

// }