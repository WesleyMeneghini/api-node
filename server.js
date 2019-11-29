const express = require ('express');

const app = express();

const routerProdutos = require('./routers/produtos');
const routerClients = require('./routers/clients');

app.use(express.json());

app.use('/produtos', routerProdutos);
app.use('/clients', routerClients);




// // const routerClientes = require('./routers/clientes');


// app.get('/', (req, res) => res.json({"nome": "wesley", "status": "ok"}));

// app.get('/produtos/:id', (req, res) => {
//     const id = req.params.id;
//     res.json(pessoas[id]);
// });

// app.get('/produtos', (req, res) => res.json("<h1>Lista os produtos</h1>"));

// // app.get('/pessoas', ())



app.listen(3000, () => console.log ("Servidor node"));