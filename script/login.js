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

