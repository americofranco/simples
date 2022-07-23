const database = require('./database')

const Login = database.sequelize.define('logins',{
    
    Email:{
        type: database.Sequelize.STRING(50)
        
         },
    Senha:{
        type: database.Sequelize.STRING(20)
        }
})



//Sobrescrever tabela.
//Login.sync({force: true});

//Usuario padrão
//Login.create({
//    Email: 'admin',
//    Senha: 'admin'
//});



module.exports = Login;