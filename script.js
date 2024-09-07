/* Functionality when clicking on the menu icon and displaying the correct navigation bar*/
function toggleResponsive() {
    const showMenu = document.querySelectorAll(".NavBar")[0];
    if (showMenu.classList.contains('responsive')) {
        showMenu.classList.remove('responsive');
    } else {
        showMenu.classList.add('responsive')
    }
}

/*https://www.w3schools.com/HOWTO/howto_js_typewriter.asp*/
var i = 0;
var txt = 'Hi! I\'m ProductiveOwl'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function highlightText() {
  const title = document.querySelectorAll("h1")[0];
  title.style.backgroundColor = "green";
}

/*https://www.w3schools.com/HOWTO/howto_js_typewriter.asp
https://www.w3schools.com/HOWTO/howto_js_scrolldrawing.asp
https://www.w3schools.com/HOWTO/howto_css_smooth_scroll.asp#section2
https://www.w3schools.com/HOWTO/howto_css_bg_gradient_scroll.asp
https://www.w3schools.com/HOWTO/howto_css_zoom_hover.asp */

/*https://www.geeksforgeeks.org/how-to-draw-a-curved-edge-hexagon-using-css/*/


/* Color schemes 
21, 25, 26, 31?, 39,  - https://visme.co/blog/website-color-schemes/
4, 9, 19, 20, 24 - https://graphicmama.com/blog/website-color-schemes/
*/