const Sequelize = require('sequelize');


//localhost
const sequelize = new Sequelize('postgres://root:postgres@localhost:5432/postgres');

//Heroku
//const  sequelize = new Sequelize('postgres://zrkcvgistijgus:9452e5c78cfe6ffd32a95cf1a6c17b252b93cdeb15523e299b7ac0bf65db1c29@ec2-44-206-11-200.compute-1.amazonaws.com:5432/dd6rahakq2ptgu');




//exportar funçao cliente
module.exports = {
  
  sequelize: sequelize,
  Sequelize: Sequelize
}

