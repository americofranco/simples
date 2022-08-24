//Pagina Materiais.
var materiais = [];

function inserir(){

var f_ativo = window.document.getElementById("form_ativo").value;
var f_descricao = window.document.getElementById("form_descricao").value;
var f_periferico = window.document.getElementById("form_periferico").value;
var f_avarias = window.document.getElementById("form_avarias").value;
<<<<<<< HEAD

var inserir_materiais = verifica_dados(f_ativo);

if(inserir_materiais == null){
 
  window.alert("Material cadastrado.")
  materiais.push({Ativo: f_ativo, Descricao: f_descricao, Periferico: f_periferico, Avarias: f_avarias});
  
  }else{
    window.alert("O Ativo nº:  " .concat(f_ativo," já exite como ", inserir_materiais.Descricao))
  }

}

=======

var inserir_materiais = verifica_dados(f_ativo);

if(inserir_materiais == null){
  var table = document.getElementById("tabela");
  var row = table.insertRow(-1); // será adicionado na última linha
  var ativoCell = row.insertCell(0); //indice da linha. 
  var descricaoCell = row.insertCell(1); // 
  var perifericoCell = row.insertCell(2); //
  var avariasCell = row.insertCell(3); // 
  
  ativoCell.innerHTML = f_ativo;
  descricaoCell.innerHTML = f_descricao;
  perifericoCell.innerHTML = f_periferico;
  avariasCell.innerHTML = f_avarias;

  window.alert("Material cadastrado.")
  materiais.push({Ativo: f_ativo, Descricao: f_descricao, Periferico: f_periferico, Avarias: f_avarias});
  
  }else{
    window.alert("O Ativo nº:  " .concat(f_ativo," já exite como ", inserir_materiais.Descricao))
  }

}

>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
function verifica_dados(numAtivo){
  var ativ = materiais.find(function(p_ativo){
    return p_ativo.Ativo === numAtivo
  });
  return ativ;
}

const btn = document.getElementById('btn_reset');

btn.addEventListener('click', function limpar(event){
  event.preventDefault();

  const inputs = document.querySelectorAll('#form_ativo,#form_descricao,#form_periferico,#form_avarias')
  inputs.forEach(input =>{
    input.value ="";

  });
});

//Exportar variaveis
//export default materiais;
