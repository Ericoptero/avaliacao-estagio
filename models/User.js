const Sequelize = require("sequelize")
const db = require("../database/db")

// Sequelize é um ORM para facilitar o trabalho utilizando banco de dados SQL, aqui fazemos o mapeamento da tabela de usuários do banco de dados.
module.exports = db.sequelize.define(
    'user',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        birth_date: {
            type: Sequelize.DATE
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updated: {
            type: Sequelize.DATE
        }
    },
    {
        timestamps : false
    }
)