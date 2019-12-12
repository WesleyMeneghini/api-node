const express = require ('express');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const routerProdutos = require('./routers/produtos');
const routerClients = require('./routers/clients');

app.use('/produtos', routerProdutos);
app.use('/clients', routerClients);


app.listen(3000, () => console.log ("Servidor node"));