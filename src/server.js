const express =  require('express');

// Instanciando o express numa constante
const app = express();

// Habilitando o template Engine no Express p/ ler EJS. 
// default de organization /views
app.set("view engine", "ejs");

// Criando as Rotas.
// Rota da Pagina Index

app.get("/", (req, res) => {

    const items = [
        {
            title: "D",
            message: "eveloperment app fast"
        },
        {
            title: "E",
            message: "ffective, Elegant e Easy debugging"
        },
        {
            title: "M",
            message: "arkup html plain JS"
        },
        {
            title: "A",
            message: "ctive development"
        },
        {
            title: "I",
            message: "nstall EJS via NPM"
        },
        {
            title: "S",
            message: "peed Execution e Simple syntax"
        },

    ];

    const subtitle = "Uma linguagem de modelagem para criação de paginas HTML com JS"


     //Nao precisa pasta /views pq ja eh o default do ejs
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
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


