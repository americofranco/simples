<<<<<<< HEAD
const database = require('./database');
const Servidores = require('./Servidores');
=======
const database = require('./database')
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204

const Login = database.sequelize.define('logins',{
    
    Email:{
<<<<<<< HEAD
        type: database.Sequelize.STRING(50),
        allowNull: false
        
         },
    Senha:{
        type: database.Sequelize.STRING(20),
          }

});

//Login.hasOne(Servidores,{foreignKey:'Email'});
=======
        type: database.Sequelize.STRING(50)
        
         },
    Senha:{
        type: database.Sequelize.STRING(20)
        }
})
>>>>>>> 3168eea5156a490fcdd796552241465973bb6204



//Sobrescrever tabela.
//Login.sync({force: true});

//Usuario padrão
//Login.create({
//    Email: 'admin',
//    Senha: 'admin'
//});



module.exports = Login;