const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar = document.getElementsByClassName('nav_ul')[0]

toggleButton.addEventListener('click', () => {
  navBar.classList.toggle('toggle')
})