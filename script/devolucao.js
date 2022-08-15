//Pagina Devolução
var devolucao = [];

function inserir(){
  var f_descricao = window.document.getElementById("form_descricao").value;
  var f_nome = window.document.getElementById("form_nome").value;
  var f_conservacao = window.document.getElementById("form_conservacao").value;
  var f_carencia = window.document.getElementById("form_carencia").value;

  var inserir_devolucao = verifica(f_descricao);

  if(inserir_devolucao == null){
  var table = document.getElementById("tabela");
  var row = table.insertRow(-1); // será adicionado na última linha
  var descricaoCell = row.insertCell(0); //indice da linha. 
  var nomeCell = row.insertCell(1); // 
  var conservacaoCell = row.insertCell(2); //
  var carenciaCell = row.insertCell(3); //
  
  
  descricaoCell.innerHTML = f_descricao;
  nomeCell.innerHTML = f_nome;
  conservacaoCell.innerHTML = f_conservacao;
  carenciaCell.innerHTML = f_carencia;

  window.alert("Devolução Realizado.")
  devolucao.push({Descricao: f_descricao, Nome: f_nome, Conservacao: f_conservacao, Carencia: f_carencia})
  
}else{
  window.alert("O Material " .concat(f_descricao," ja foi devolvido por ", inserir_devolucao.Nome, " no dia ", inserir_devolucao.Carencia));
}
}

function verifica(nomeDescricao){
  var devo = devolucao.find(function(p_devolucao){
    return p_devolucao.Descricao === nomeDescricao
  })
  return devo;
}

const btn = window.document.getElementById('btn_reset');

btn.addEventListener('click', function limpar(event){
  event.preventDefault();

  const inputs = document.querySelectorAll('#form_descricao,#form_nome,#form_conservacao,#form_carencia')
  inputs.forEach(input =>{
    input.value ="";

  });
});

//export defaults descricao; nome; conservacao; carencia;
