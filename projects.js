/*
The following websites were referenced when coding the filters:
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
https://dev.to/dhintz89/simple-filters-in-css-or-js-185k
*/

function filterLanguage(e) {
    const languages = document.querySelectorAll(".container"); //Get all the project tiles
    const languageButtons = document.querySelectorAll(".btn"); //Get all the language buttons

    let filter = e.target.dataset.filter; //Find which filter to use for every project

    if (filter === '*') { //Display all projects
        languages.forEach(language => language.classList.remove('hidden'));
    } else {
        //For every project, if it contains the language selected, remove the hidden class. Otherwise, add the hidden class
        languages.forEach(language => {
            language.classList.contains(filter) ?
                language.classList.remove('hidden') :
                language.classList.add('hidden');
        });
    };

    //For every language button, if it is the button clicked, add the active class. Otherwise, remove it
    languageButtons.forEach(langButton => {
        langButton.classList.contains(filter) ?
            langButton.classList.add('activeBtn') :
            langButton.classList.remove('activeBtn');
    });
};

/* Functionality when clicking on the menu icon and displaying the correct navigation bar*/
function toggleResponsive() {
    const showMenu = document.querySelectorAll(".NavBar")[0];
    if (showMenu.classList.contains('responsive')) {
        showMenu.classList.remove('responsive');
    } else {
        showMenu.classList.add('responsive')
    }
}