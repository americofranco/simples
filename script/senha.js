var senhas = [];
function nova_senha(){
    var nova_senha = window.document.getElementById('form_nova_senha').value;
    var redigitar = window.document.getElementById('form_confirme_nova_senha').value;

    if(senhas == null){
        if(nova_senha == redigitar){
            senhas.push({NovaSenha: nova_senha, Redigitar: redigitar });
           window.alert('Criação de Novo usuario CONCLUIDO. Porfavor, Proceda com login');
          }
          
        }else{
         window.alert('Senhas não conferem, favor redigite');
        }
       
};