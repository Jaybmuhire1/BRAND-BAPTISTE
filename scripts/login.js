const signInForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('pass-input');
const account = document.getElementById('account');

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

 } else {
   const promise = firebase
    .auth()
    .signInWithEmailAndPassword(email, pass);
   promise.then((user) => {
 
   
   document.querySelector('.alert').style.display = 'block';
   setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 1000);
   document.querySelector('.alert').innerHTML = 'Successfully login';
   });
   promise.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

  document.querySelector('.alert').style.display='block';
  document.querySelector('.alert').innerHTML=errorMessage;
  setTimeout(function(){
      document.querySelector('.alert').style.display='none'; 
  },3000);
  signInForm.reset();
  });
 }
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    if (user != null) {
      console.log(user.email);
      window.location.href='../pages/createpost.html';
      setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 3000);
    }
  } else {
    // No user is signed in.
  }
});

};







