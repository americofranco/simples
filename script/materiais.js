//Pagina Materiais.
var ativo = document.getElementById("form_ativo");
var descricao = document.getElementById("form_descricao");
var periferico = document.getElementById("form_periferico");
var avarias = document.getElementById("form_avarias");

async function reset() {
  var table = document.getElementById("tabela"); // obtêm o elemento table
  var rowCount = table.rows.length; // faz a contagem total linhas na table
  for (var x = rowCount - 1; x > 0; x--) {
    table.deleteRow(x); // deleta linha por linha
  }
}

async function mater() {
  var table = document.getElementById("tabela");
  var row = table.insertRow(-1); // será adicionado na última linha
  var ativoCell = row.insertCell(0); //indice da linha. 
  var descricaoCell = row.insertCell(1); // 
  var perifericoCell = row.insertCell(2); //
  var avariasCell = row.insertCell(3); // 
  
  ativoCell.innerHTML = ativo.value;
  descricaoCell.innerHTML = descricao.value;
  perifericoCell.innerHTML = periferico.value;
  avariasCell.innerHTML = avarias.value;
  
}

//export defaults ativo; descricao; periferico; avarias;
