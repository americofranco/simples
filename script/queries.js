//carregr modulo
let pool = require('./database')
let matricula = require('./page.js');
let nome = require('./page.js');
let cargo = require('./page.js');
let telefone = require('./page.js')
let email = require('./page.js');





//Operaçoes no Banco de Dados.


//Servidores
const getServidores = (request,response) => {
    client.connect()
    let busca = request.body
    
    .then(() =>  pool.query('select * from servidores where nome = $1 or cargo = $1 or telefone = $1 or email = $1;', [busca],
    (error, results) => {

        if (error) {
            throw error;
        }  
        response.status(200).json(results.rows)

}))
   
}      

const createServidores = (request, response) => {
    client.connect()
    let nome, cargo, telefone = request.body
   
    pool.query('insert into servidores (matricula, nome, cargo, telefone) values ($1, $2, $3, $4) returning*;',[matricula, nome, cargo, telefone], (error, results) => {
        if (error){
            throw error;
        }
        response.status(201).send('Usuario adicionado em: $(results.rows[0])')

    })

}

//Materiais
const getMateriais = (request,response) => {
    let busca = request.body
        
    pool.query('select * from materiais where descricao = $1 or tipo_perifeico = $1 or avarias = $1 ;', [busca],
    (error, results) => {
        
        if (error) {
        throw error;
    }  
    response.status(200).json(results.rows)

    })  
}      

const createMateriais = (request, response) => {
    let  descricao, tipo_periferico, avarias = request.body
   
    pool.query('insert into servidores (descricao, tipo_periferico, avarias) values ($1, $2, $3) returning*;',[descricao, tipo_periferico, avarias], (error, results) => {
        if (error){
            throw error;
        }
        response.status(201).send('Usuario adicionado em: $(results.rows[0])')

    })

}

//Agendamento
const getAgendamento = (request,response) => {
    let  busca = request.body
        
    pool.query('select * from materiais where descricao = $1 or nome = $1 or tipo_perifeico = $1 or avarias = $1 ;', [busca],
    (error, results) => {
        
        if (error) {
        throw error;
    }  
    response.status(200).json(results.rows)

    })  
}      

const createAgendamento = (request, response) => {
    let  descricao, nome, local_uso, retorno = request.body
   
    pool.query('insert into servidores (descricao, nome, tipo_periferico, avarias) values ($1, $2, $3) returning*;',[descricao, nome, locade_de_uso_retorno], (error, results) => {
        if (error){
            throw error;
        }
        response.status(201).send('Usuario adicionado em: $(results.rows[0])')

    })

}

//Devoluçao
const getDevolucao = (request,response) => {
    let busca = request.body
        
    pool.query('select * from materiais where descricao = $1 or nome = $1 or estado_do_ativo = $1 or reagendamento_devolucao = $1 ;', [busca],
    (error, results) => {
        
        if (error) {
        throw error;
    }  
    response.status(200).json(results.rows)

    })  
}      

const createDevolucao = (request, response) => {
    let  descricao, nome, estado_do_ativo, reagendamento_devolucao  = request.body
   
    pool.query('insert into servidores (descricao, tipo_periferico, avarias) values ($1, $2, $3, $4) returning*;',[descricao, nome, estado_do_ativo, reagendamento_devolucao], (error, results) => {
        if (error){
            throw error;
        }
        response.status(201).send('Usuario adicionado em: $(results.rows[0])')

    })

}

//Aluno
const getAlunos = (request,response) => {
    let busca = request.body
        
    pool.query('select * from alunos where  nome = $1;', [busca],
    (error, results) => {
        
        if (error) {
        throw error;
    }  
    response.status(200).json(results.rows)

    })  
}      

const createAlunos = (request, response) => {
    let  nome, matricula, ra  = request.body
   
    pool.query('insert into alunos (nome, matricula, ra) values ($1, $2, $3) returning*;',[nome, matricula, ra], (error, results) => {
        if (error){
            throw error;
        }
        response.status(201).send('Usuario adicionado em: $(results.rows[0])')

    })

}

module.exports = {
    createServidores,
    getServidores,
    createMateriais,
    getMateriais,
    createAgendamento,
    getAgendamento,
    createDevolucao,
    getDevolucao,
    createAlunos,
    getAlunos
}
