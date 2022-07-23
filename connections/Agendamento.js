const database = require('./database')

const Agendamento = database.sequelize.define('agendamentos',{
    Descricao:{
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Nome:{
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Local_Uso:{
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Saida:{
        type: database.Sequelize.DATE
    },
    Retorno:{
        type: database.Sequelize.DATE
    }

});

//Criar tabela
//Agendamento.sync({force: true});

module.exports = Agendamento;

