const nodemailer = require('nodemailer')


 function sendEmail(){
     let email = window.document.getElementById('form_email').value;

     var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'americofranco086@gmail.com',
        pass: 'a_franco'
      }
    });
    
    var mailOptions = {
      from: 'americofranco086@gmail.com',
      to: email,
      subject: 'Confirmação de Login Plataforma CRSE - Americo Franco',
      text: 'Para completar seu cadastro CRIE sua senha, <a href="/views/validation.html/#nova_senha"> aqui </a>'
          
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log('Erro de envio de email: '  + error);
      } else {
        console.log('Email Enviado com sucesso: ' + info.response);
      }
    }); 
    window.alert('Email de confirmação enviado')

   };

var senhas = [];
function nova_senha(){
    var nova_senha = window.document.getElementById('form_nova_senha').value;
    var redigitar = window.document.getElementById('form_confirmar_nova_senha').value;

    if(senhas == null){
        if(nova_senha == redigitar){
            senhas.push({NovaSenha: nova_senha, Redigitar: redigitar })
        }
    }
}