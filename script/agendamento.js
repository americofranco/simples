//Pagina Agendamento
var descricao = document.getElementById("form_descricao");
var nome = document.getElementById("form_nome");
var local_uso = document.getElementById("form_local_uso");
var saida = document.getElementById("form_saida");
var retorno = document.getElementById("form_retorno");

async function reset() {
  var table = document.getElementById("tabela"); // obtêm o elemento table
  var rowCount = table.rows.length; // faz a contagem total linhas na table
  for (var x = rowCount - 1; x > 0; x--) {
    table.deleteRow(x); // deleta linha por linha
  }
}

async function agend() {
  var table = document.getElementById("tabela");
  var row = table.insertRow(-1); // será adicionado na última linha
  var descricaoCell = row.insertCell(0); //indice da linha. 
  var nomeCell = row.insertCell(1); // 
  var local_usoCell = row.insertCell(2); //
  var saidaCell = row.insertCell(3); //
  var retornoCell = row.insertCell(4); 
  
  descricaoCell.innerHTML = descricao.value;
  nomeCell.innerHTML = nome.value;
  local_usoCell.innerHTML = local_uso.value;
  saidaCell.innerHTML = saida.value;
  retornoCell.innerHTML = retorno.value;
  
}

//export module descricao; nome; local_uso; saida; retorno;
