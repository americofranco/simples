//Modulos essenciais APP
const express = require('express'); //framework
const body = require('body-parser'); //server side input html
const bcrypt = require('bcrypt'); //criptogtafar senhas
const jwt = require('jsonwebtoken');//gerar tokens
const env = require('dotenv');//acessar strings criptografadas
const alert =  require('alert'); //server side window.alert
const nodemailer = require('nodemailer');//modulo de email


//Start express app
const app = express();
const path = require('path');


//Modulos das tabelas SQL
const Login = require('./connections/Login')
const Servidores = require('./connections/Servidores')
const Alunos = require('./connections/Alunos')
const Materiais = require('./connections/Materiais')
const Agendamento = require('./connections/Agendamento')
const Devolucao = require('./connections/Devolucao')

//Diretorio de models.
const database = require('./connections/database');



//porta servidor heroku
//const port = process.env.PORT || 8080;
//serivodor localhost
const port = 3000;



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

//Ativar Cae sensitive
app.set('case sensitive routing', true);



//Rotas GET
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/comunicado.html'))

});
app.get('/login', function(req, res, next) {
   res.render('login')
 
 });

app.get('/email', function(req, res) {
  res.render('email')

});
app.get('/senha', function(req, res) {
   res.render('senha')
 
 });

 
app.get('/servidores', function(req, res) {
   res.render('servidores')

});

app.get('/alunos', function(req,res){
   res.render('alunos')
});

app.get('/materiais', function(req, res) {
    res.render('materiais')
 })

 app.get('/agendamento', function(req, res) {
    res.render('agendamento')
 });

 app.get('/devolucao', function(req, res) {
    res.render('devolucao')
 });

 app.get('/pesquisa_servidores', function(req, res) {
    Servidores.findAll().then(function(servidores){
      res.render('pesquisa_servidores',{servidores: servidores})  
       
    })  
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
      Agendamento.findAll().then(function(agendamento){
         res.render('pesquisa_agendamento', {agendamento: agendamento})
       })
      
   });
   app.get('/pesquisa_devolucao', function(req, res) {
      Devolucao.findAll().then(function(devolucao){
         res.render('pesquisa_devolucao', {devolucao: devolucao})
       })
   });

 

 app.get('/error', function(req,res){
   res.render('error')
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
      res.render('servidores')
      
   }).catch(function(error){
      res.render('error',{error: error})
       })
   });

   app.post('/Alunos', function(req,res){
      Alunos.create({
         Nome: req.body.nome,
         Matricula: req.body.matricula,
         Ra: req.body.ra
         
      }).then(function(){
         console.log('Aluno gravado.')
         alert('Aluno Registrado.')


      }).catch(function(error){
         res.render('error',{error: error})
       
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
         alert('Material Registrado.')
         

      }).catch(function(error){
         res.render('error',{error: error})
       
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
         alert('Agendamento Realizado.')
         

      }).catch(function(error){
         res.render('error',{error: error})
              
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
         alert('Devolucação')
      

      }).catch(function(error){
         res.render('error',{error: error})
      })

   });

   //Pesquisas
   app.post('/pesquisa_servidores', function(req, res) {
      Servidores.findAll({
         where:{
            //Nome: `%${req.body.form_busca}%`
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
   Materiais.findOne({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(materiais){
      res.render('pesquisa_materiais',{materiais: materiais})

   }).catch(function(error){
    res.render('error',{error: error})
   })
      
});

app.post('/pesquisa_agendamento', function(req,res){
   Agendamento.findOne({
     where: {
        Descricao:  req.body.form_busca
     }}).then(function(agendamento){
      res.render('pesquisa_agendamento',{agendamento: agendamento})

   }).catch(function(error){
    res.render('error',{error: error})
   })
      
});

app.post('/pesquisa_devolucao', function(req,res){
   Devolucao.findOne({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(devolucao){
      res.render('pesquisa_devolucao',{devolucao: devolucao})

   }).catch(function(error){
    res.render('error',{error: error})
   })
      
});

 //autenticação
 app.post('/login', async function(req, res) {
     //Checar se o usuáio existe.
   let user =  await Login.findOne({where: {Email: req.body.f_email, Senha: req.body.f_senha}});
   if(user){
      const senha_valida =  await bcrypt.compare(req.body.f_senha, user.Senha);
      if(senha_valida){
         token = jwt.sign({"Email": user.Email,"Senha": user.Senha}.process.env.SECRET);
          res.render('alunos',{token: token});
         
      }else{
        res.render('login');
      }
   }else{         
         res.render('login');
            }
         
         });

   
app.post('/email', function(req, res){
   //Objeto email.
   let input_email =  {
         Email: req.body.f_send_email
         };
         console.log(input_email);
   
       // Enviar email
       let transporter =  nodemailer.createTransport({
           service: "hotmail",
           auth:{
           user: "americofranco086@outlook.com",
           pass: "a_franco"
           }
       
       });
       
       let mailOptions = {
         from: 'americofranco086@outlook.com',
         to: `${input_email}`,
         subject: 'Confirmação de Login Plataforma CRSE - Americo Franco',
         text: 'Para completar seu cadastro CRIE sua senha',
         html:' <a href="/senha"> aqui </a>'         
       
       };       
      transporter.sendMail(mailOptions)
       .then(()=> alert('Email enviado'))
       .catch((error) => console.log(error))
       .finally(()=>  Login.create(input_email));

      
        
});

app.post('/senha', function(req, res){
      const chave = bcrypt.genSalt(10);
      let senha = {       
      Senha: req.body.f_senha,
      Token: bcrypt.hash(req.body.f_confirme_nova_senha, chave)
    };
    const criar_senha = Login.create(senha);
    return criar_senha, res.render('login')

   });      
   

//Carregar app
//banco de dados sem sobrescrita;
database.sequelize.sync().then((req)=> {
// banco de dados com sobrescrita;
//database.sequelize.sync({force: true}).then((req)=> {
   app.listen(port, () => {
      console.log(`App rodando com banco de dados carregado em http://localhost:${port}.`);
      alert(`App rodando com banco de dados carregado em http://localhost:${port}.`)
    })
       }).catch((error) => {
           console.log(error)
           });
