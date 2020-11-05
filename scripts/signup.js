
var regxName = /^([a-zA-Z]{2,} )([a-zA-Z]+){0,2}$/;
var regxE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

   const signUpForm = document.getElementById('sign-up-form');
   const signOut = document.querySelector('#logout-btn');

   signUpForm.addEventListener('submit', onSignUp);

  function onSignUp (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email-input');
  const passInput = document.getElementById('pass-input');
  const passCInput = document.getElementById('passconfirm-input');
  const nameInput = document.getElementById('full-name');

   const nameFull = nameInput.value;
   const email = emailInput.value;
   const pass = passInput.value;
   const passConfirmInput = passCInput.value;


if(nameFull === '' || email === '' || pass === '' || passConfirmInput === '') {
  
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').innerHTML = 'Please fill the below input';
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
} 
else if (pass !== passConfirmInput) {
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').innerHT = 'password does not match';
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
  } else if (!regxName.test(nameFull)) {
      document.querySelector('.alert').style.display = 'block';
      document.querySelector('.alert').innerHTML = 'Please write your full name';
      setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
      return false;
  } 
  else if (!regxE.test(email)) {
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').innerHTML = 'Please validate your email';
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
    return false;
  } else {

    const promise = firebase 
      .auth()
      .createUserWithEmailAndPassword(email, pass);
    promise.then((user) => {
    addUser(auth.currentUser.uid, email, 'guest');
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').style.backgroundColor = '#008000';
    document.querySelector('.alert').innerHTML = 'You have registered';
    setTimeout(function() {window.location.href = "../pages/login.html";}, 3000);
    console.log('Hello World');
    signUpForm.reset();
  });
  promise.catch (e =>{
    console.log(e);
  });

  }

  }
  

const addUser = async(id, email, role) => {
  try {
    db.collection('users').doc(id).set({
      id,
      email,
      role,
    });
  } catch(e){
    console.log(e);
    alert(e);
  }
}

