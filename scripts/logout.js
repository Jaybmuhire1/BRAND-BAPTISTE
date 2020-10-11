
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.location = '../pages/blog1.html'
  })
} );
