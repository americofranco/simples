//Pagina Servidores
var matricula = document.getElementById("form_matricula");
var nome = document.getElementById("form_nome");
var cargo = document.getElementById("form_cargo");
var celular = document.getElementById("form_celular");
var email = document.getElementById("form_email");

async function reset () {
  var table = document.getElementById("tabela"); // obtêm o elemento table
  var rowCount = table.rows.length; // faz a contagem total linhas na table
  for (var x = rowCount - 1; x > 0; x--) {
    table.deleteRow(x); // deleta linha por linha
  }
}

async function servid() {
  var table = document.getElementById("tabela");
  var row = table.insertRow(-1); // será adicionado na última linha
  var matriculaCell = row.insertCell(0); // 
  var nomeCell = row.insertCell(1); // o index "1" refere-se a coluna "Nome"
  var cargoCell = row.insertCell(2); // o index "2" refere-se a coluna "Cargo"
  var celularCell = row.insertCell(3); // o index "3" refere-se a coluna "Material"
  var emailCell = row.insertCell(4); // o index "4" refere-se a coluna "Quantidade"

  matriculaCell.innerHTML = matricula.value;
  nomeCell.innerHTML = nome.value;
  cargoCell.innerHTML = cargo.value;
  celularCell.innerHTML = celular.value;
  emailCell.innerHTML = email.value;

}

//export defaults matricula; nome; cargo; celular; email;






















