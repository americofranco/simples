const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')



//const port = 3000
// para Heroku deploy use:
const port = 80; //ou
//const port = 8080;




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

//Carregar diretorios
app.use(express.static(__dirname, + '/static/css'))
app.use(express.static(__dirname,+'/script'))
app.use(express.static(__dirname, + '/views'))



//Rotas GET
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/servidores.html'))
})

app.get('/servidores', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/servidores.html'))
})

app.get('/materiais', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/materiais.html'))
 })

 app.get('/agendamento', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/agendamento.html'))
 })

 app.get('/devolucao', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/devolucao.html'))
 })

 app.get('/pesquisa', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/pesquisa.html'))
 })

 app.get('/cadastroaluno', function(req,res){
    res.sendFile(path.join(__dirname,'/views/cadastroalunov6.html'))
 })


 //Rotas POST







//Carregar app
app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}.`)
  })
  

  