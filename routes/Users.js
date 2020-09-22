const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

// REGISTRO DO USUÁRIO
// ./users/register   METODO: POST
// Para realizar o cadastro do usuário através do Postman basta adicionar o endpoint e repassar as informações que são necessárias no body
// No caso, nome, data de nascimento, email, senha, após o envio o created usará o horário atual para armazenar o horário de registro.
users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        name: req.body.name,
        birth_date: req.body.birth_date,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.email + ' registered'})
                })
                .catch(err => res.send('error: ' + err))
            })
        }else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

//LOGIN
// ./users/login   METODO: POST
//Primeiro procura o email no qual está tentando logar e com isso analisa se o solicitante é usuário ou não.
//Caso seja ele irá comparar a senha repassada pelo parâmetro req com a senha descriptografada do banco de dados, caso esteja correto, será retornado o web token de conexão.
users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          }
        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})


// EDIÇÃO DE USUÁRIO
// ./users/edit   METODO: PUT
// Usuário edita as informações de conta, sendo possível apenas mudar nome, data de nascimento e email, com isso o horário da última edição é armazenado.
// Primeiro ele procura o usuário com o email solicitado e após isso muda os dados que foram entregues como parâmetro em userData.
users.put('/edit', (req, res) => {
    const today = new Date()
    let userData = {
        name: req.body.name,
        birth_date: req.body.birth_date,
        email: req.body.email,
        updated: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user) {
            User.update(userData, { where : {
                    email: req.body.email
                }})
            .then(user => {
                res.json({status: userData.email + ' modified'})
            })
            .catch(err => res.send('error: ' + err))
            
        }else{
            res.json({error: "User does not exists"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

// DELEÇÃO DE USUÁRIO POR ID
// ./users/delete   METODO: POST
// Procura o usuário com o id recebido como parâmetro e então exclui o usuário correspondente no banco de dados.
users.post('/delete', (req, res) => {
    User.findOne({
        where:{
            id: req.body.id
        }
    })
    .then(user => {
        if(user){
            User.destroy({
                where: {
                    id: req.body.id
            }})
            .then(user => {
                res.json({status: "User deleted"})
            })
        }
        else {
            res.json({error: "User does not exists"})
        }
    })
})

module.exports = users