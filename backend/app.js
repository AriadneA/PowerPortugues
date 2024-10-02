const express = require('express');
const bodyParser = require('body-parser');
const executaSQL = require('./dbconect'); 
const executaQuery = require('./dbconect');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());       

app.get('/perguntas', function(req, res){
    let query = "select*from perguntas;"
   executaSQL(query, res);
})
app.post('/inserir', function(req, res){
    let enunciado = req.body.enunciado;
    let a = req.body.a;
    let b = req.body.b;
    let c = req.body.c;
    let d = req.body.d;
    let resposta = req.body.resposta;
    let query = `INSERT INTO perguntas(enunciado, a, b, c, d, resposta)
     VALUES ('${enunciado}', '${a}','${b}','${c}','${d}','${resposta}');`;
    executaSQL(query, res);
})
app.post('/editarpergunta/:id', function(req, res){
    let id = parseInt(req.params.id);
    let enunciado = req.body.enunciado;
    let a = req.body.a;
    let b = req.body.b;
    let c = req.body.c;
    let d = req.body.d;
    let resposta = req.body.resposta;
    let query = `UPDATE perguntas 
    SET enunciado = '${enunciado}',
    a = '${a}',b ='${b}',c = '${c}',
    d = '${d}',
    resposta = '${resposta}'
    WHERE (id= ${id}) `;
    executaQuery(query, res);
})
app.post('/excluir/:id', function(req, res){
    let id = parseInt(req.params.id);
    let query = `DELETE FROM perguntas WHERE id = ${id}`;
    executaQuery(query,res)
})

app.listen(8080, ()=>{
console.log('servidor rodando na porta 8080')
});