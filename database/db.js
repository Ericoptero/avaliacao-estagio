const Sequelize = require("sequelize")
const db = {}
// Conexão com o banco de dados, em dialect é possivel selecionar com qual banco de dados SQL você quer trabalhar.
const sequelize = new Sequelize("estagio_db", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db