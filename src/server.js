const express =  require('express');

// Instanciando o express numa constante
const app = express();

// Habilitando o template Engine no Express p/ ler EJS. 
// default de organization /views
app.set("view engine", "ejs");

// Criando as Rotas.
// Rota da Pagina Index
app.get("/", (req, res) => {
    res.render("pages/index"); //Nao precisa pasta /views pq ja eh o default do ejs
})

// Rota da Pagina sobre
app.get("/sobre", (req, res) => {
    res.render("pages/about");
})

// Rota da pagina Contato 
app.get("/contato", (req, res) => {
    res.render("pages/contact");
})

// Habilitando a porta no servidor express
app.listen(8080);
console.log("Start Server listening on port 8080");


