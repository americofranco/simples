//Pagina Servidores
var servidores = [];

function inserir(){
  

var f_matricula = window.document.getElementById("form_matricula").value;
var f_nome = window.document.getElementById("form_nome").value;
var f_cargo = window.document.getElementById("form_cargo").value;
var f_tel = window.document.getElementById("form_tel").value;
var f_email = window.document.getElementById("form_email").value;

var inserir_servidores = verifica_dados(f_matricula);


if(inserir_servidores == null)
{
  var table = document.getElementById("tabela");
    var row = table.insertRow(-1); // será adicionado na última linha
    var matriculaCell = row.insertCell(0); // 
    var nomeCell = row.insertCell(1); // o index "1" refere-se a coluna "Nome"
    var cargoCell = row.insertCell(2); // o index "2" refere-se a coluna "Cargo"
    var telCell = row.insertCell(3); // o index "3" refere-se a coluna "Material"
    var emailCell = row.insertCell(4); // o index "4" refere-se a coluna "Quantidade"
  
    matriculaCell.innerHTML = f_matricula;
    nomeCell.innerHTML = f_nome;
    cargoCell.innerHTML = f_cargo;
    telCell.innerHTML = f_tel;
    emailCell.innerHTML = f_email;

servidores.push({Matricula: f_matricula, Nome: f_nome, Cargo:f_cargo, Tel:f_tel, Email:f_email  });
window.alert("Registrando Usuario.");

}

else 
{
  window.alert("A Matricula nº:  " .concat(f_matricula, "  ja esta inserido, para o Servidor: ", inserir_servidores.Nome ))
  }
    
};



function verifica_dados(numMatricula){
  var matric = servidores.find(function(p_matricula){
    return  p_matricula.Matricula === numMatricula
  }); 
  return matric;
};



const btn = document.getElementById('btn_reset');

btn.addEventListener('click', function limpar(event){
  event.preventDefault();

  const inputs = document.querySelectorAll('#form_matricula,#form_nome,#form_cargo,#form_tel,#form_email')
  inputs.forEach(input =>{
    input.value ="";

  });
});


