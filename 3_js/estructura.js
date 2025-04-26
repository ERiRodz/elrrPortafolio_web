//Rellena los elementos de los class="estructuras"
var encabzado = document.getElementById("encabezado");
var nav_sec = document.getElementById("nav_sec");
var panel = document.getElementById("panel");
var pie = document.getElementById("pie");

let estructuraInfo = 
{
    encabzado: 
    '<div id="info_main">' +
        '<div id="nombre" class="texto_main">Eric L. Rivera Rodríguez</div>' +
        '<div id="roles" class="texto_main">Role 1, Role 2, Role 3</div>' +
    '</div>'
    +
    '<div id="nav_main">' +
        '<a class="texto_main navButton" href="http://" target="_blank" rel="noopener noreferrer">Home</a>' +
        '<a class="texto_main navButton" href="http://" target="_blank" rel="noopener noreferrer">CV/Resume</a>' +
        '<a class="texto_main navButton" href="http://" target="_blank" rel="noopener noreferrer">Bio</a>' +
        '<a class="texto_main navButton" href="http://" target="_blank" rel="noopener noreferrer">Contact</a>' +
    '</div>'
    ,
    nav_sec:
    '<div class="navSecContainer">' +
        '<div id="mathButton" onclick=\'manageSection("math", mathShown)\'><div class="texto_main navButton">Math</div></div>' +
        '<img src="4_img/Geometria/DownYellowTriangle.png" alt="DownYellowTriangle" class="DYTriangle center" id="mathArrow">' +
    '</div>' +
    '<div class="navSecContainer">' +
        '<div id="gamesButton" onclick=\'manageSection("games", gamesShown)\'><div class="texto_main navButton">Games</div></div>' +
        '<img src="4_img/Geometria/DownYellowTriangle.png" alt="DownYellowTriangle" class="DYTriangle center" id="gamesArrow">' +
    '</div>' +
    '<div class="navSecContainer">' +
        '<div id="arteButton" onclick=\'manageSection("arte", arteShown)\'><div class="texto_main navButton">Arte</div></div>' +
        '<img src="4_img/Geometria/DownYellowTriangle.png" alt="DownYellowTriangle" class="DYTriangle center" id="arteArrow">' +
    '</div>'
    ,
    panel:
    '<div id="math" class="contenido"></div>' +
    '<div id="games" class="contenido"></div>' +
    '<div id="arte" class="contenido"></div>'
    ,
    pie:
    '<div class="texto_main pie_contenido">Pie</div>' +
    '<div class="texto_main pie_contenido">Pie</div>' +
    '<div class="texto_main pie_contenido">Pie</div>'
}

//Functions
const setEstructura = () =>
{
    encabzado.innerHTML = estructuraInfo.encabzado;
    nav_sec.innerHTML = estructuraInfo.nav_sec;
    panel.innerHTML = estructuraInfo.panel;
    pie.innerHTML = estructuraInfo.pie;
}

// Listeners: On load
document.addEventListener("DOMContentLoaded", function() { setEstructura() ; });