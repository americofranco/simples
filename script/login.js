<<<<<<< HEAD
let data_user = {
    Email:  window.document.getElementById('form_email').value,
    Senha: window.document.getElementById('form_senha').value
    
};
function consultar(){
    if(data_user == true) {
        window.alert('Usuario Autorizado.');
    
    }else {
        window.alert('Usuário NÃO esta autorizado.');
    };
};

   
   //Funçoes Acessibiliadade
    function contrast(){
        document.body.style.backgroundColor="black";
        document.getElementsByClassName('login').style.color="white";
    };
    function font_mais(){
        document.getElementsByClassName('login').style.fontSize="30px"

    };	
    function font_menos(){
        document.getElementsByClassName('login').style.fontSize="10px"

    };
=======
var user = [];

function consultar(){
    try{
    var input_email = window.document.getElementById('form_email').value;
    var input_senha = window.document.getElementById('form_senha').value;
   
    user.push({Email: input_email, Senha: input_senha})
   
    }catch(error){
        return window.alert('A consulta retornou com erro: ' + error);
        
    }finally{
        window.alert("Login Autorizado.");

    }};

   //Funçoes Acessibiliadade
    function contrast(){
        document.body.style.backgroundColor="black";
        document.getElementById('login').style.color="white";
    }
    function font_mais(){
        document.getElementById('login').style.fontSize="30px"

    }	
    function font_menos(){
        document.getElementById('login').style.fontSize="10px"

    }	
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204

