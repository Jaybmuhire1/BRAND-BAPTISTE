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
 const auth =firebase.auth();


const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.location = '../pages/blog1.html'
  })
} )