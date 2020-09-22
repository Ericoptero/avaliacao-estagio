import axios from 'axios'

// Utilizado axios como cliente HTTP fazendo as conexões necessárias que já foram configuradas em nossa API em ../../routes/Users.js

// REGISTRO
// Como já explicado no arquivo das rotas repassa os dados do usuário através do endpoint e realiza o registro
export const register = newUser => {
    return axios
    .post('users/register', {
        name: newUser.name,
        birth_date: newUser.birth_date,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log("Registered")
    })
}

//LOGIN
//Repassa o email e senha e ele devolve um token de usuário como explicado no arquivo de rotas, esse token define sua sessão.
export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

//EDIÇÃO DE CREDENCIAIS
//Através do email repassado ele modifica os dados de nome e data de nascimento do usuário.
export const editUser = user => {
    return axios
    .put('users/edit', {
        name: user.name,
        email: user.email,
        birth_date: user.birth_date
    })
    .then(res => {
        console.log("User modified")
    })
    .catch(err => {
        console.log(err)
    })
}

//DELEÇÃO DE USUÁRIO
//Através do id que é repassado como parâmetro ele realiza a exclusão da conta de usuário.
export const deleteUser = user => {
    return axios
    .post('users/delete', {
        id: user.id
    })
    .then(res => {
        console.log("User deleted")
    })
    .catch(err => {
        console.log(err)
    })
}