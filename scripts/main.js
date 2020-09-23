const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navBar.classList.toggle('toggle')
})