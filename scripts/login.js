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
const signInForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('pass-input');



signInForm.addEventListener('submit', onSignIn);
function onSignIn (e) {
 e.preventDefault();
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

};

//add user function

auth.onAuthStateChanged(user =>{
  if(user){
    console.log('user logged in',user)
  } else {
    console.log('user logged out')
  } 
}) 



