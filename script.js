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
var txt = 'Hi! I\'m Madhurika'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/*var j = 0;
var allSkills = ["HTML", "CSS", "JavaScript", "Java"];
var skillSpeed = 100;
var skill = null;

function chooseSkill() {
  skill = allSkills[(Math.floor(Math.random() * allSkills.length))];
  console.log("Skill is " + skill);
  j = 0; // Reset j for the new skill
  skillWriter(removeSkill); // Start writing the new skill
}

function removeSkill(chooseSkill) {
  while (j >= 0) {
    var text = document.getElementById("skill").innerHTML;
    text = text.substring(0, text.length - 1); // Remove one character
    document.getElementById("skill").innerHTML = text;
    j--;
  }
  setTimeout(chooseSkill, 1000); // Start a new skill after removing the old one
}

function skillWriter(removeSkill) {
  if (j < skill.length) {
    document.getElementById("skill").innerHTML += skill.charAt(j);
    j++;
    setTimeout(skillWriter, skillSpeed);
  } else {
    removeSkill(chooseSkill());
  }
}*/

function highlightText() {
  const title = document.querySelectorAll("h1")[0];
  title.style.backgroundColor = "green";
}