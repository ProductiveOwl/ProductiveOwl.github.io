/* Functionality when clicking on the menu icon and displaying the correct navigation bar*/
function toggleResponsive() {
    const showMenu = document.querySelectorAll(".NavBar")[0];
    if (showMenu.classList.contains('responsive')) {
        showMenu.classList.remove('responsive');
    } else {
        showMenu.classList.add('responsive')
    }
}