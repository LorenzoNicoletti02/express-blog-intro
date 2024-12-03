const express = require("express");
const app = express();

// Importato il file Data.js che ci esporta un oggetto con al suo interno l'array delle ricette
const {arrayRicette} = require("./data");


app.use(express.static("public"));

// Listen Serve per accendere il server e metterlo in ascolto per le chiamate API
app.listen(3000, () => {
})

// Creo una rotta 
app.get("/", (request, response) => {
    console.log("Server del mio blog");
    response.send("<h1>Ciaone vengo dal server</h1>");
})

// Creo un'altra rotta 
app.get("/Bacheca", (request, response) => {
    const objectReturn = {arrayRicette};
    response.json(objectReturn);
})


