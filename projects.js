//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
//https://dev.to/dhintz89/simple-filters-in-css-or-js-185k

function filterLanguage (e) {
    const languages = document.querySelectorAll(".container");
    let filter = e.target.dataset.filter;
    if (filter === '*') {
        languages.forEach(language => language.classList.remove('hidden'));
    } else {
        languages.forEach(language => {
            language.classList.contains(filter) ?
            language.classList.remove('hidden') :
            language.classList.add('hidden');
        });
    };

    //refreshActiveLanguages(e);
};

/*function refreshLanguageButtons(e) {
    const languageButtons = document.querySelectorAll(".btn");
    languageButtons.forEach(langButton => {
        langButton.classList.remove('active');
    });
    e.classList.add('active');
};*/

/*function refreshActive() {
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("allButtons");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}*/
