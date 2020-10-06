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

var db=firebase.firestore();
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();
 
    var fullname=myInput('fname');
    var email=myInput('email');
    var subject=myInput('subject');
    if(fullname === '' || email === '' ||subject === '') {
      document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').innerHTML = 'Please fill the input field';
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
    } else {

    
    saveName(fullname,email,subject);
    console.log(myInput('subject'));
}
function saveName(a,b,c) {
db.collection('messages').add({
    fullname:a,
    email:b,
    subject:c,
})
.then(function (){console.log('Contact Saved');
document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').innerHTML = 'Message sent';
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';}, 2000);
})
.catch(function (error){console.log(error);})
}
}
function myInput(id) {
    return document.getElementById(id).value;
}