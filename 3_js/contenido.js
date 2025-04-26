// Elements
let contenido_Math = document.getElementById("math");
let contenido_Games = document.getElementById("games");
let contenido_Arte = document.getElementById("arte");

//
let entryRow;
let entry;
let name;
let source;

// Number of columns (entries per row)
const col = 3;

// Functions
const createRow = (section) =>
{
    entryRow = document.createElement("div");
    entryRow.setAttribute("class", "contenidoRow");

    switch(section)
    {
        case "math":
            contenido_Math.append(entryRow);
        break;
        case "games":
            contenido_Games.append(entryRow);
        break;
        case "arte":
            contenido_Arte.append(entryRow);
        break;
    }
}

const createEntry = () =>
{
    entry = document.createElement("div");
    entry.setAttribute("class", "entry");
    entryRow.appendChild(entry);
}

const createPortada = (section, sourceIndex) =>
{
    switch(section)
    {
        case "math":
            // From mathGallery.js
            //                     (array) mathEntry[i]
            portada = mathEntry[sourceIndex].portada;
        break;
        case "games":
            // From gamesGallery.js
            //                     (array) gamesEntry[i]
            portada = gamesEntry[sourceIndex].portada;
        break;
        case "arte":
            // From arteGallery.js
            //                     (array) arteEntry[i]
            nombre = arteEntry[sourceIndex].nombre;
            portada = arteEntry[sourceIndex].portada;
        break;
    }

    let img;
    
    img = document.createElement("img");
    img.setAttribute("class", "entryImg");
    img.setAttribute("src", portada);

    let titulo;
    
    titulo = document.createElement("div");
    titulo.setAttribute("class", "entryTitulo");
    titulo.appendChild(document.createTextNode(nombre));

    // Button para ver el producto
    let entryButton;

    // From producto.js
    //                  (function) openProducto(section, sourceIndex)

    entryButton = document.createElement("div");
    entryButton.setAttribute("class", "entryButton");
    entryButton.addEventListener("click", function() { openProducto(section, sourceIndex) });

    entryButton.appendChild(img);
    entryButton.appendChild(titulo);
    entry.appendChild(entryButton);
}

//Creating and naming all Math entries, and addded them in the contenido.
for (i = 0; i < mathEntry.length; i++) 
{
    // Row
    if (i % col === 0) createRow("math");

    // Entry
    createEntry();

    // Portada
    createPortada("math", i);

    // From mathGallery.js
    //                     (array) mathEntry[i]
    if (i === mathEntry.length - 1) entryRow = entry = null;
}

//Creating and naming all Games entries, and addded them in the contenido.
for (i = 0; i < gamesEntry.length; i++) 
{
    // Row
    if (i % col === 0) createRow("games");

    // Entry
    createEntry();

    // Portada
    createPortada("games", i);

    // From gamesGallery.js
    //                     (array) gamesEntry[i]
    if (i === gamesEntry.length - 1) entryRow = entry = null;
}

//Creating and naming all Arte entries, and addded them in the contenido.
for (i = 0; i < arteEntry.length; i++) 
{
    // Row
    if (i % col === 0) createRow("arte");

    // Entry
    createEntry();

    // Portada
    createPortada("arte", i);
    
    // From arteGallery.js
    //                     (array) arteEntry[i]
    if (i === arteEntry.length - 1) entryRow = entry = null;
}