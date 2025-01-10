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



//var i = 0;
//var txt = 'Hi! I\'m Madhurika'; /* The text */
//var speed = 100; /* The speed/duration of the effect in milliseconds */

/*function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}*/

var index = 0;
var allSkills = ["HTML", "CSS", "JavaScript", "Python", "Java", "C", "SQL"];
var skillSpeed = 150;
var skill = "";
var skillIndex = 0;

function displaySkill() {
  skill = allSkills[0];
  skillWriter();
  //setInterval(skillWriter, 2000);
  //setInterval(removeSkill, 8000);
  //setInterval(skillWriter, 8000);
}

/*Loop through all the skills */
function chooseSkill() {
  //skill = allSkills[(Math.floor(Math.random() * allSkills.length))];
  if (skillIndex == (allSkills.length -1)) {
    skillIndex = 0;
  } else {
    skillIndex++;
  }
  skill = allSkills[skillIndex]
}

/*Remove the current skill on the website and choose the next one to display */
function removeSkill() {
  if (index > 0) {
    var text = document.getElementById("skill").innerHTML;
    text = text.slice(0, -2); // Remove one character
    document.getElementById("skill").innerHTML = text + "|";
    index--;
    setTimeout(removeSkill, skillSpeed);
  }
  else {
    chooseSkill();
    skillWriter();
  }
}

/*Write the skill to the screen */
function skillWriter() {
  if (index < skill.length) {
    var text = document.getElementById("skill").innerHTML;
    text = text.slice(0, -1); // Remove one character
    text += skill.charAt(index);
    document.getElementById("skill").innerHTML = text + "|";
    index++;
    setTimeout(skillWriter, skillSpeed);
  } else {
    setTimeout(removeSkill, 4000);
  }
}