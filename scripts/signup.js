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

  //  const signUp = document.getElementById('sign-up');


  //  const submitBtn = document.getElementById('submit-btn');

  //  const validate = (e) => {
  //    e.preventDefault();
  //    const nameInput = document.getElementById('full-name');
  //    const emailInput = document.getElementById('email-input');
  //    if (nameInput.value === "") {
  //      alert("Please enter your username.");
  //      nameInput.focus();
  //      return false;
  //    }
       
  //    if (emailInput.value === "") {
  //      alert("Please enter your email address.");
  //      emailInput.focus();
  //      return false;
  //    }
   
  //    if (!emailIsValid(emailInput.value)) {
  //      alert("Please enter a valid email address.");
  //      emailAddress.focus();
  //      return false;
  //    } else {
  //     const promise = auth.createUserWithEmailAndPassword(email,pass);
  //     promise.catch(e => console.log(e.message));
  //    }
  //  }
   
  //  const emailIsValid = email => {
  //    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //  }
   
  //  signUp.addEventListener('click', validate);





 // function (message) {
  //   const div = document.getElementsByClassName('display-error');
  //   div.appendChild(document.createTextNode('Please correct'));
  //   div.style.display = "block";
  //   setTimeout(function() {
  //     document.getElementsByClassName('display-error').remove();
  //   }, 3000); 
  //   



























   
   const signUpForm = document.getElementById('sign-up-form');
   const signUp = document.getElementById('sign-up');
   const emailInput = document.getElementById('email-input');
   const passInput = document.getElementById('pass-input');
   const passCInput = document.getElementById('pass-confirm-input');
   const nameInput = document.getElementById('full-name');
   const signIn = document.getElementById('sign-in');
   const signOut = document.getElementById('sign-out');
   
   signUpForm.addEventListener('submit', onSignUp);

  function onSignUp (e) {
  e.preventDefault();
 
   const nameFull = nameInput.value;
   const email = emailInput.value;
   const pass = passInput.value;
   const auth = firebase.auth();
   const passConfirmInput = passCInput.value;

if(nameFull === '' || email === '' || pass === '' || passConfirmInput === '') {
  
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').innerHTML = 'Please fill the below input';
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);

  } else if (pass !== passConfirmInput){
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').innerHTML = 'password does not match';
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
  }

   {
  
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  
  };
  
}
