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

   const signUpForm = document.getElementById('sign-up-form');
   const signUp = document.getElementById('sign-up');
   const emailInput = document.getElementById('email-input');
   const passInput = document.getElementById('pass-input');
   const passCInput = document.getElementById('pass-confirm-input');
   const nameInput = document.getElementById('full-name');
   
   
   signUpForm.addEventListener('submit', onSignUp);

  function onSignUp (e) {
  e.preventDefault();
   const nameFull = nameInput.value;
   const email = emailInput.value;
   const pass = passInput.value;
  //  const auth = firebase.auth();
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

  
 const promise = auth.createUserWithEmailAndPassword(email, pass)
    promise.then((user) => {addUser(auth.currentUser.uid, email, 'guest')
    window.location.href = "../pages/login.html";
  });
  promise.catch (e =>{
    console.log(e);
  });

  }
  

const addUser = async (id,email,role) => {
  try {
    await db.collection('users').doc(id).set({
      id,
    email,
    role
    });
  } catch(e) {
    console.log(e);
    alert(e);
  }
}