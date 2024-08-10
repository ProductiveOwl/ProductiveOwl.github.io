//Functionality when clicking on the menu icon and displaying the correct navigation bar
function toggleResponsive() {
  const showMenu = document.querySelectorAll(".NavBar")[0];
  if (showMenu.classList.contains('responsive')) {
      showMenu.classList.remove('responsive');
  } else {
      showMenu.classList.add('responsive')
  }
}

//Execute a function when a button is pushed
function increase () {
  let current_num = document.getElementById("currentNum");
  current_num.innerHTML = Number(current_num.innerHTML) + 1;
};

function reset () {
  let current_num = document.getElementById("currentNum");
  current_num.innerHTML = 0;
}

function decrease () {
  let current_num = document.getElementById("currentNum");
  current_num.innerHTML = Number(current_num.innerHTML) - 1;
};
