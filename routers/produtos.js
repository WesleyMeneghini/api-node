const express = require('express');
const router = express.Router();
const conn = require ('../connect');

const bd = [{
        "id": "1",
        "produto": "teclado"
    },
    {
        "id": "2",
        "produto": "monitor"
    
}];



router.get("/", (req, res) =>{
    res.json({"status": "ok", "data":bd});
});

router.post("/", (req, res) =>{
    const data = req.body;
    res.status(200).json({"method":"post", "data": data});
});

router.post("/:id", (req, res) =>{
    const id = req.params.id;
    res.status(201).json({"status":"Cadastro efetuado com sucesso!"});
});

router.delete("/:id", (req, res) =>{
    const id = req.params.id;
    res.status(200).json({"status":"Dados deletados com sucesso!"});
});


router.get("/", (req, res) =>{
    res.json({"status": "ok", "data":bd});
    // res.status(201);
});

router.get("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({"status": "ok", "data":bd[id-1]});
});

module.exports = router;