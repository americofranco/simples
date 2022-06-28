//Pagina Devolução
var descricao = document.getElementById("form_descricao");
var nome = document.getElementById("form_nome");
var conservacao = document.getElementById("form_conservacao");
var carencia = document.getElementById("form_carencia");

async function reset() {
  var table = document.getElementById("tabela"); // obtêm o elemento table
  var rowCount = table.rows.length; // faz a contagem total linhas na table
  for (var x = rowCount - 1; x > 0; x--) {
    table.deleteRow(x); // deleta linha por linha
  }
}

async function devolu() {
  var table = document.getElementById("tabela");
  var row = table.insertRow(-1); // será adicionado na última linha
  var descricaoCell = row.insertCell(0); //indice da linha. 
  var nomeCell = row.insertCell(1); // 
  var conservacaoCell = row.insertCell(2); //
  var carenciaCell = row.insertCell(3); //
  
  
  descricaoCell.innerHTML = descricao.value;
  nomeCell.innerHTML = nome.value;
  conservacaoCell.innerHTML = local_uso.value;
  carenciaCell.innerHTML = saida.value;
   
}

//export defaults descricao; nome; conservacao; carencia;
