let contenidoProducto = document.getElementById("contenidoProducto");
let productoShown = false;

const openProducto = (section, sourceIndex) =>
{
    let nombre = "";
    let fecha = "";
    let portada = "";
    let producto = "";
    let galeria = new Array();
    let info = "";

    // From contenido.js
    //                  (html elem) contenido_Math
    //                  (html elem) contenido_Games
    //                  (html elem) contenido_Arte

    switch(section)
    {
        case "math":
            // From mathGallery.js
            //                     (array) mathEntry[i]
            nombre = mathEntry[sourceIndex].nombre;
            portada = mathEntry[sourceIndex].portada;

            contenido_Math.style.display = "none";
        break;
        case "games":
            // From gamesGallery.js
            //                     (array) gamesEntry[i]
            nombre = gamesEntry[sourceIndex].nombre;
            portada = gamesEntry[sourceIndex].portada;

            contenido_Games.style.display = "none";
        break;
        case "arte":
            // From arteGallery.js
            //                     (array) arteEntry[i]
            nombre = arteEntry[sourceIndex].nombre;
            fecha = arteEntry[sourceIndex].fecha;
            portada = arteEntry[sourceIndex].portada;
            producto = arteEntry[sourceIndex].producto;
            galeria = arteEntry[sourceIndex].galeria;
            info = arteEntry[sourceIndex].info;

            contenido_Arte.style.display = "none";
        break;
    }

    createProducto(section, nombre, fecha, producto, galeria, info);

    productoShown = true;
}

const closeProducto = (section, navClosesIt) =>
{
    // From contenido.js
    //                  (html elem) contenido_Math
    //                  (html elem) contenido_Games
    //                  (html elem) contenido_Arte

    if (!navClosesIt)
    {        
        switch(section)
        {
            case "math":                
                contenido_Math.style.display = "block";
            break;
            case "games":
                contenido_Games.style.display = "block";
            break;
            case "arte":
                contenido_Arte.style.display = "block";
            break;
        }
    }

    contenidoProducto.innerHTML = "";

    productoShown = false;
}

const manageProducto = (section) =>
{
    // From navControl.js
    //                  (function) manageSection(section, shown, productoIsShown)
    switch(section)
    {
        case "math":
            manageSection("math", true, true);
        break;
        case "games":
            manageSection("games", true, true);
        break;
        case "arte":
            manageSection("arte", true, true);
        break;
    }

    closeProducto(section, false);
}

const createProducto = (productoSection, nombre, fecha, producto, galeria, info) =>
{
    
    // Close Button
    let closeButton = document.createElement("div");
    let closeButtonIcon = document.createElement("img");

    closeButtonIcon.setAttribute("src", "../4_img/Geometria/buttonClose_Back2.png");
    closeButtonIcon.setAttribute("alt", "closePrducto");

    closeButton.setAttribute("id", "closeProducto");
    closeButton.setAttribute("class", "button close");
    closeButton.addEventListener("click", function() { manageProducto(productoSection); });

    closeButton.appendChild(closeButtonIcon);
    contenidoProducto.appendChild(closeButton);
    
    // Título
    let titulo = document.createElement("div");
    
    titulo.setAttribute("id", "titulo");
    titulo.setAttribute("class", "texto_main");
    titulo.appendChild(document.createTextNode(nombre));
    
    contenidoProducto.appendChild(titulo);    
    
    // Producto
    let presentation = document.createElement("div");
    let productoImg = document.createElement("img");

    productoImg.setAttribute("src", producto);
    productoImg.setAttribute("alt", "Prducto" + nombre);

    presentation.setAttribute("id", "presentation");

    presentation.appendChild(productoImg);
    contenidoProducto.appendChild(presentation);

    // Info
    let informacion = document.createElement("div");

    informacion.setAttribute("id", "informacion");
    informacion.setAttribute("class", "texto_main");
    informacion.appendChild(document.createTextNode("Date: " + fecha));
    informacion.appendChild(document.createElement("br"));
    informacion.appendChild(document.createTextNode(info));

    contenidoProducto.appendChild(informacion);
    
    // Galeria
    let galeriaContenido = document.createElement("div");

    for (i = 0; i < galeria.length; i++)
    {
        let gal = document.createElement("img");
        
        gal.setAttribute("src", "../5_Contenido/Arte/" + nombre + "/producto" + galeria[i] + ".jpg");
        gal.setAttribute("alt", "/producto" + galeria[i]);

        galeriaContenido.appendChild(gal);
    }

    galeriaContenido.setAttribute("id", "galeria");

    contenidoProducto.appendChild(galeriaContenido);
}