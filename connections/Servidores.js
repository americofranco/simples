//Conexão com banco de dados.
const database = require('./database')

const Servidores = database.sequelize.define('servidores',{
    Matricula: {
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
            
    },
    Nome: {
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Cargo: {
        type: database.Sequelize.STRING(30),
        allowNull: false

    },
    Telefone: {
        type: database.Sequelize.INTEGER,
        allowNull: false
    },
    Email: {
        type: database.Sequelize.STRING(50),
        allowNull: false
    }
<<<<<<< HEAD
    
}

);
=======
});
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204

//Criar Nova tabela. 
//Servidores.sync({force: true });



<<<<<<< HEAD


=======
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204
module.exports = Servidores; 