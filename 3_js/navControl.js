// Properties
let mathButton = document.getElementById("mathButton");
let mathArrow = document.getElementById("mathArrow");
let mathShown = false;

let gamesButton = document.getElementById("gamesButton");
let gamesArrow = document.getElementById("gamesArrow");
let gamesShown = false;

let arteButton = document.getElementById("arteButton");
let arteArrow = document.getElementById("arteArrow");
let arteShown = false;


//Functions
const setNav = () =>
{
    mathArrow.style.opacity = "0";
    gamesArrow.style.opacity = "0";
    arteArrow.style.opacity = "0";

    // From contenido.js
    //                  (html elem) contenido_Math
    //                  (html elem) contenido_Games
    //                  (html elem) contenido_Arte

    contenido_Math.style.display = "none";
    contenido_Games.style.display = "none";
    contenido_Arte.style.display = "none";
}

const manageSection = (section, shown, productoIsShown) =>
{       
    if (shown && !productoIsShown) closeSection(section);
    else if (!shown || productoIsShown) openSection(section);

    // From producto.js
    //                  (function) closeProducto(section, navClosesIt)
        
    closeProducto(section, true);
}

const openSection = (section) =>
{
    // From contenido.js
    //                  (html elem) contenido_Math
    //                  (html elem) contenido_Games
    //                  (html elem) contenido_Arte

    switch (section)
    {
        case "math":
            contenido_Math.style.display = "block";
            mathButton.firstChild.style.color = "#FFC002";
            mathArrow.style.opacity = "1";
            mathShown = true;
        break;
        case "games":
            contenido_Games.style.display = "block";
            gamesButton.firstChild.style.color = "#FFC002";
            gamesArrow.style.opacity = "1";
            gamesShown = true;
        break;
        case "arte":
            contenido_Arte.style.display = "block";
            arteButton.firstChild.style.color = "#FFC002";
            arteArrow.style.opacity = "1";
            arteShown = true;
        break;
    }    

    if (section != "math" && mathShown) closeSection("math");
    if (section != "games" && gamesShown) closeSection("games");
    if (section != "arte" && arteShown) closeSection("arte");
}

const closeSection = (section) =>
{
    // From contenido.js
    //                  (html elem) contenido_Math
    //                  (html elem) contenido_Games
    //                  (html elem) contenido_Arte
    
    switch (section)
    {
        case "math":
            contenido_Math.style.display = "none";
            mathButton.firstChild.style.color = "#EBEBEB";
            mathArrow.style.opacity = "0";
            mathShown = false;
        break;
        case "games":
            contenido_Games.style.display = "none";
            gamesButton.firstChild.style.color = "#EBEBEB";
            gamesArrow.style.opacity = "0";
            gamesShown = false;
        break;
        case "arte":
            contenido_Arte.style.display = "none";
            arteButton.firstChild.style.color = "#EBEBEB";
            arteArrow.style.opacity = "0";
            arteShown = false;
        break;
    }    
}


// Listeners: On load
document.addEventListener("DOMContentLoaded", function() { setNav() ; });

// Listeners: click
// From producto.js
//                  (boolean) productoShown
mathButton.addEventListener("click", function() { manageSection("math", mathShown, productoShown); });
gamesButton.addEventListener("click", function() { manageSection("games", gamesShown, productoShown); });
arteButton.addEventListener("click", function() { manageSection("arte", arteShown, productoShown); });