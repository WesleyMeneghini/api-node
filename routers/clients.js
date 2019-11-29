const express = require ('express');
const router = express.Router();
const conn = require ('../connect');


router.get("/", (req, res) =>{

  const sql = "select * from clientes;";
  conn.query (sql, (err, result) =>{
    if(err){
      res.json(erro);
    }else{
      res.json(result);
    }
  });
});

router.get("/:id", (req, res) =>{
  const id = req.params.id;
  const sql = `select * from clientes where codigo=${id};`;
  conn.query (sql, (err, result) =>{
    if(err){
      res.json(erro);
    }else{
      res.json(result);
    }
  });
});

// cadastrar uma nova pessoa
router.post("/", (req, res) =>{
  const { nome } = req.body;
  console.log(nome);
  const sql = `insert into clientes(nome) values('${nome}');`;
  conn.query(sql, (err, result) =>{
    if(err){
      res.json(erro);
    }else{
      res.json(result);
    }
  });
});

module.exports = router;