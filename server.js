//Modulos essenciais APP
const express = require('express')
const body = require('body-parser')
const app = express()
const path = require('path')
let alert =  require('alert')


//Modulos das tabelas SQL
const Login = require('./connections/Login')
const Servidores = require('./connections/Servidores')
const Alunos = require('./connections/Alunos')
const Materiais = require('./connections/Materiais')
const Agendamento = require('./connections/Agendamento')
const Devolucao = require('./connections/Devolucao')

//Diretorio de models.
const database = require('./connections/database')


//porta servidor heroku
//const port = process.env.PORT || 8080;
//serivodor localhost
const port = 3000



//body-parser: javascript HTML support
app.use(body.json())
app.use(body.urlencoded({extended: false}))

//Carregar diretorios
app.use(express.static(__dirname, + '/static/css'));
app.use(express.static(__dirname,+'/script'));
app.use(express.static(__dirname, + '/views'));
app.use(express.static(__dirname, +'/connections'));

//Engine para dados dinamicos
app.set('view engine', 'ejs');
app.set('views', './views');



//Rotas GET
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/comunicado.html'))

});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'))

});

app.get('/validation', function(req, res) {
   res.sendFile(path.join(__dirname, '/views/validation.html'))

});

 
app.get('/servidores', function(req, res) {
   res.sendFile(path.join(__dirname, '/views/servidores.html'))

});

app.get('/materiais', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/materiais.html'))
 })

 app.get('/agendamento', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/agendamento.html'))
 });

 app.get('/devolucao', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/devolucao.html'))
 });

 app.get('/pesquisa_servidores', function(req, res) {
    res.render('pesquisa_servidores')
 });

 app.get('/pesquisa_alunos', function(req, res) {
   res.render('pesquisa_alunos')
   });
 app.get('/pesquisa_materiais', function(req, res) {
      res.render('pesquisa_materiais')
   });
   app.get('/pesquisa_agendamento', function(req, res) {
      res.render('pesquisa_agendamento')
   });
   app.get('/pesquisa_devolucao', function(req, res) {
      res.render('pesquisa_devolucao')
   });

 app.get('/alunos', function(req,res){
    res.sendFile(path.join(__dirname,'/views/alunos.html'))
 });

 app.get('/error', function(req,res){
   res.sendFile(path.join(__dirname,'/views/error.html'))
});

 //Rotas POST
 //Tabelas SQL
app.post('/Servidores', function(req, res){
   Servidores.create({
      Matricula: req.body.form_matricula,
      Nome: req.body.form_nome,
      Cargo: req.body.form_cargo,
      Telefone: req.body.form_tel,
      Email: req.body.form_email
      
   }).then(function(){
      console.log('Servidor Gravado')
      
   }).catch(function(error){
      console.log('Erro: falha na escrita SQL!' + error)
      alert("Erro: falha na escrita SQL!" + error)
           
   })
   });

   app.post('/Alunos', function(req,res){
      Alunos.create({
         Nome: req.body.nome,
         Matricula: req.body.matricula,
         Ra: req.body.ra
         
      }).then(function(){
         console.log('Aluno gravado.')


      }).catch(function(error){
         console.log('Erro: falha na escrita SQL!' + error)
         alert("Erro: falha na escrita SQL!" + error)
              
      })
   });

   app.post('/Materiais', function(req, res){
      Materiais.create({
         Ativo: req.body.form_ativo,
         Descricao: req.body.form_periferico,
         Periferico: req.body.form_periferico,
         Avarias: req.body.form_avarias

      }).then(function(){
         console.log('Material Gravado')
         

      }).catch(function(error){
         console.log('Erro: falha na escrita SQL!' + error)
         alert("Erro: falha na escrita SQL!" + error)
              
      })
   });

   app.post('/Agendamento', function(req,res){
      Agendamento.create({
         Descricao: req.body.form_descricao,
         Nome: req.body.form_nome,
         Local_Uso: req.body.form_local_uso,
         Saida: req.body.form_saida,
         Retorno: req.body.form_retorno

      }).then(function(){
         console.log('Agendamento Gravado')
         

      }).catch(function(error){
         console.log('Erro: falha na escrita SQL!' + error)
         alert("Erro: falha na escrita SQL!" + error)
              
      })
   });

   app.post('/Devolucao', function(req,res){
      Devolucao.create({
         Descricao: req.body.form_descricao,
         Nome: req.body.form_nome,
         Conservacao: req.body.form_conservacao,
         Carencia: req.body.form_carencia

      }).then(function(){
         console.log('Devolução Gravada')
      

      }).catch(function(error){
         console.log('Erro: falha na escrita SQL!' + error)
         alert("Erro: falha na escrita SQL!" + error)
              
      })

   });

   //Pesquisas
   
   app.post('/pesquisa_servidores', function(req,res){
       Servidores.findOne({
         where: {
            Nome: req.body.form_busca
         }}).then(function(list){
            res.json(list)

         }).catch(function(error){
         alert("Erro na busca.", + error)
      })
          
   });

   app.post('/pesquisa_alunos', function(req,res){
      Alunos.findOne({
        where: {
           Nome: req.body.form_busca
        }}).then(function(list){
           res.json(list)

        }).catch(function(error){
        alert("Erro na busca.", + error)
     })
         
  });

  app.post('/pesquisa_materiais', function(req,res){
   Materiais.findOne({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(list){
        res.json(list)

     }).catch(function(error){
     alert("Erro na busca.", + error)
  })
      
});

app.post('/pesquisa_agendamento', function(req,res){
   Agendamento.findOne({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(list){
        res.json(list)

     }).catch(function(error){
     alert("Erro na busca.", + error)
  })
      
});

app.post('/pesquisa_devolucao', function(req,res){
   Devolucao.findOne({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(list){
        res.json(list)

     }).catch(function(error){
     alert("Erro na busca.", + error)
  })
      
});
   
   //autenticação
   app.post('/Login', function(req, res){
      //Checar se o usuáio existe.
      let user =  Login.findOne({
          Email: req.body.form_email,
          Senha: req.body.form_senha
         })
      if(user === true){
         return res.redirect('/alunos')
      }else{
         return res.redirect('/validation')
      }
   });   
    
  
   app.post('/validation' ,  function(req, res){
      //inserir novo usuario, se não existir.
        Login.create({
           Email: req.body.form_email,
           Senha: req.body.form_confirme_nova_senha

        }).then(function(){
           alert('Usuario Registrado, proceda com login.')

        }).catch(function(error){ 
        console.log('Erro de autenticação', + error)
        alert('Erro de autnticação', + error)
   })  
                   
   });

   



//Carregar app
database.sequelize.sync().then((req)=> {
   app.listen(port, () => {
      console.log(`App rodando com banco de dados carregado em http://localhost:${port}.`)
     
    });
});