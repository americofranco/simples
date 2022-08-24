//Modulos essenciais APP
<<<<<<< HEAD
const express = require('express'); //framework
const body = require('body-parser'); //server side input html
const alert =  require('alert'); //server side window.alert
const session = require('express-session'); //Autentication


//Start express app 
const app = express();
const path = require('path');



=======
const express = require('express')
const body = require('body-parser')
const app = express()
const path = require('path')
let alert =  require('alert')


>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
//Modulos das tabelas SQL
const Login = require('./connections/Login')
const Servidores = require('./connections/Servidores')
const Alunos = require('./connections/Alunos')
const Materiais = require('./connections/Materiais')
const Agendamento = require('./connections/Agendamento')
const Devolucao = require('./connections/Devolucao')
<<<<<<< HEAD

//Diretorio de models.
const database = require('./connections/database');



//porta servidor heroku
const port = process.env.PORT || 8080;
//serivodor localhost
//const port = 3000;

=======
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204

//Diretorio de models.
const database = require('./connections/database')

//app express config
app.use(session({
   secret: 'secret',
   resave: true,
   saveUninitialized: true

//porta servidor heroku
//const port = process.env.PORT || 8080;
//serivodor localhost
const port = 3000

<<<<<<< HEAD
}));
=======


//body-parser: javascript HTML support
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
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

//Ativar Case sensitive
app.set('case sensitive routing', true);


<<<<<<< HEAD

//Rotas GET
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/comunicado.html'))

=======
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

>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
});

app.get('/menu', function(req, res){
   if(req.session.loggedin){
      res.render(`menu${req.session.useremail}`)
      
   }else(
      res.render('login')
   )
   req.end();

<<<<<<< HEAD
});

app.get('/login', function( req, res) {
   res.render('login')
 
 });

app.get('/novo', function(req,res) {
  res.render('novo')

});

 
app.get('/servidores', function(req,res) {
   res.render('servidores')

});

app.get('/alunos', function(req, res){
   res.render('alunos')
});

app.get('/materiais', function(req,res) {
    res.render('materiais')
 })

 app.get('/agendamento', function(req,res) {
    res.render('agendamento')
 });

 app.get('/devolucao', function(req,res) {
    res.render('devolucao')
 });

 app.get('/pesquisa_servidores', function(req,res) {
      Servidores.findAll().then(function(servidores){
       res.render('pesquisa_servidores',{servidores: servidores})
      });  
    
    });
        
     
   
 
 app.get('/pesquisa_alunos', function(req, res) {
   Alunos.findAll().then(function(alunos){
      res.render('pesquisa_alunos',{alunos: alunos})  
       
    })  
      });
   
   
 app.get('/pesquisa_materiais', function(req, res) {
   Materiais.findAll().then(function(materiais){
      res.render('pesquisa_materiais', {materiais: materiais})
    })
   });
      
   app.get('/pesquisa_agendamento', function(req, res) {
      Agendamento.findAll().then(function(agendamentos){
         res.render('pesquisa_agendamento', {agendamentos: agendamentos})
       })
      
   });
   app.get('/pesquisa_devolucao', function(req, res) {
      Devolucao.findAll().then(function(devolucao){
         res.render('pesquisa_devolucao', {devolucao: devolucao})
       })
   });
=======
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
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204

 

 app.get('/error', function(req,res){
   res.render('error')
});
 
 //Rotas POST
 //Tabelas SQL
app.post('/Servidores', function(req, res){
<<<<<<< HEAD
    
=======
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
   Servidores.create({
      Matricula: req.body.form_matricula,
      Nome: req.body.form_nome,
      Cargo: req.body.form_cargo,
      Telefone: req.body.form_tel,
      Email: req.body.form_email
      
   }).then(function(){
<<<<<<< HEAD
      console.log('ok')
      
   }).catch(function(error){
      res.render('error',{error: error})
       })
=======
      console.log('Servidor Gravado')
      
   }).catch(function(error){
      console.log('Erro: falha na escrita SQL!' + error)
      alert("Erro: falha na escrita SQL!" + error)
           
   })
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
   });

   app.post('/Alunos', function(req,res){
      Alunos.create({
         Nome: req.body.nome,
         Matricula: req.body.matricula,
         Ra: req.body.ra
         
      }).then(function(){
         console.log('Aluno gravado.')
<<<<<<< HEAD
         


      }).catch(function(error){
         res.render('error',{error: error})
       
=======


      }).catch(function(error){
         console.log('Erro: falha na escrita SQL!' + error)
         alert("Erro: falha na escrita SQL!" + error)
              
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
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
<<<<<<< HEAD
        
         

      }).catch(function(error){
         res.render('error',{error: error})
       
=======
         

      }).catch(function(error){
         console.log('Erro: falha na escrita SQL!' + error)
         alert("Erro: falha na escrita SQL!" + error)
              
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
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
<<<<<<< HEAD
        
         

      }).catch(function(error){
         res.render('error',{error: error})
=======
         

      }).catch(function(error){
         console.log('Erro: falha na escrita SQL!' + error)
         alert("Erro: falha na escrita SQL!" + error)
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
              
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
<<<<<<< HEAD
        
      

      }).catch(function(error){
         res.render('error',{error: error})
=======
      

      }).catch(function(error){
         console.log('Erro: falha na escrita SQL!' + error)
         alert("Erro: falha na escrita SQL!" + error)
              
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
      })

   });

   //Pesquisas
<<<<<<< HEAD
   app.post('/pesquisa_servidores', function(req, res) {
      Servidores.findAll({ 
         where:{
             //Nome: %${req.body.form_busca}            
             Nome: req.body.form_busca
                      
      }}).then(function(servidores){
         res.render('pesquisa_servidores',{servidores: servidores})
             
        }).catch(function(error){
         res.render('error',{error: error})         
       });
      });
                
   

   app.post('/pesquisa_alunos', function(req,res){
      Alunos.findAll({
        where: {
           Nome: req.body.form_busca
        }}).then(function(alunos){
           res.render('pesquisa_alunos',{alunos: alunos})

        }).catch(function(error){
         res.render('error',{error: error})
        })
         
  });

  app.get('/pesquisa_materiais', function(req,res){
   Materiais.findAll({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(materiais){
      res.render('pesquisa_materiais',{materiais: materiais})

   }).catch(function(error){
    res.render('error',{error: error})
   })
=======
   
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
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
      
});

app.post('/pesquisa_agendamento', function(req,res){
<<<<<<< HEAD
   Agendamento.findAll({
     where: {
        Descricao:  req.body.form_busca
     }}).then(function(agendamentos){
      res.render('pesquisa_agendamento',{agendamentos: agendamentos})

   }).catch(function(error){
    res.render('error',{error: error})
   })
=======
   Agendamento.findOne({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(list){
        res.json(list)

     }).catch(function(error){
     alert("Erro na busca.", + error)
  })
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
      
});

app.post('/pesquisa_devolucao', function(req,res){
<<<<<<< HEAD
   Devolucao.findAll({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(devolucao){
      res.render('pesquisa_devolucao',{devolucao: devolucao})

   }).catch(function(error){
    res.render('error',{error: error})
   })
      
});

 //autenticação
 app.post('/login',  function(req, res) {
   //Checar se o usuáio existe.
   let useremail = req.body.f_email;
   let usersenha = req.body.f_senha;
   
   Login.findAll({
     where:{
      Email: useremail,
      Senha: usersenha }}).then(function(results){
        if(results.length > 0){
            req.session.loggedin = true;
            req.session.useremail = useremail;
            res.render('menu');
         }else{
            res.render('login');
         }
        
      }).catch(function(error){
         res.render('error',{error: error})

      })
=======
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
    
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
  
   app.post('/validation' ,  function(req, res){
      //inserir novo usuario, se não existir.
        Login.create({
           Email: req.body.form_email,
           Senha: req.body.form_confirme_nova_senha

        }).then(function(){
           alert('Usuario Registrado, proceda com login.')

<<<<<<< HEAD
 });         
         

   
app.post('/novo',  function(req, res){
   //Objeto novo usuario
     let input_novo =  {
         Email: req.body.f_send_email,
         Senha: req.body.f_confirme_nova_senha
   }
      console.log(input_novo);
      Login.create(input_novo);
       
   return res.render('login');   
        
});

  

//Carregar app
//banco de dados sem sobrescrita;

   database.sequelize.sync().then(()=> {
// banco de dados com sobrescrita;
//database.sequelize.sync({force: true}).then((req)=> {
   app.listen(port, () => {
      console.log(`App rodando com banco de dados carregado em http://localhost:${port}.`);
     
    });
       }).catch((error)=>
       console.log(error)
       );
     
=======
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
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
