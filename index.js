
const toggleButton = document.getElementsByClassName('toggler')[0];
const hiddenMenu = document.getElementsByClassName('hidden-menu-div')[0];

toggleButton.addEventListener('click', () => {
     hiddenMenu.classList.toggle('active')
} )