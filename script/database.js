//carregar modulo
const Pool = require('pg').Pool
const client = new Pool({
    connectionString: 'postgres://root:postgres@localhost:5432/postgres'
})

const pool = client.connect()


//Servidores
.then(() => client.query('create table if not exists servidores(matricula serial, nome varchar(40) primary key not null, cargo varchar (30) not null, telefone varchar(12) not null, email varchar(40), foreign key (email) references login (email));'))
.then(()=> console.log('Processando 1/5 - Tabela Servidores'))

//Materiaias
.then(() => client.query('create table if not exists materiais(ativo serial primary key, descricao varchar(50), tipo_periferico varchar(50), avarias varchar(100));'))
.then(()=> console.log('Processando 2/5 - Tabela Materiais'))

//Agendamento
.then(() => client.query('create table if not exists agendamento(descricao varchar(50), nome varchar(40), local_uso varchar(50), saida date, retorno date, primary key(saida), foreign key (descricao) references materiais(descricao), foreign key (nome) references servidores (nome));'))
.then(()=> console.log('Processando 3/5 - Tabela Agendamento'))

//Devolucao
.then(() => client.query('create table if not exists devolucao(descricao varchar(50), nome varchar(40), estado_do_ativo varchar(40), reagendamento_devolucao date primary key);'))
.then(()=> console.log('Processando 4/5 - Devolucao Devolucao'))

//Alunos
.then(() => client.query('create table if not exists alunos (nome varchar(40) primary key, matricula interger(10), ra interger(10) );'))
.then(()=> console.log('Processando 5/5 - Tabela Alunos'))

.catch(e => console.log(e))
.finally(()=> client.end())

//exportar funçao cliente
module.export = {
    pool
} 