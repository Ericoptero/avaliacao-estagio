import React, {Component} from 'react'
import {deleteUser} from './UserFunctions'
import jwt_decode from 'jwt-decode'
import Button from '@material-ui/core/Button';

class Delete extends Component{
    constructor(){
        super()
        this.state = {
            id: ''
        }

        this.deletingUser = this.deletingUser.bind(this)
    }

    //Coletando o id através do token da sessão do usuário
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            id: decoded.id
        })
    }

    // Comando de deleção que captura o id do estado atual e utiliza o comando de deleção do UserFunctions.js.
    // Após deletar ele remove a chave de sessão do usuário e o redireciona para a página de login.
    deletingUser(){
        const user = {
            id: this.state.id
        }
        deleteUser(user).then(res => {
            localStorage.removeItem('usertoken')
            this.props.history.push('/login')
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="jumbotron mt-5">
                        <div className="col-sm-8 mx-auto">

                            <h1 className="text-center">Você tem certeza que deseja deletar seu usuário?</h1>

                            {/* Botão de confirmação, no click executa a ação de deleção. */}
                            <Button type="button" 
                            variant="contained" 
                            color="secondary" 
                            className="btn-lg btn-block mt-2 p-3" 
                            onClick={this.deletingUser}>
                                Deletar
                            </Button>

                            {/* Botão de Voltar*/}
                            <a href="/profile">
                                <Button type="button" 
                                variant="contained" 
                                color="default" 
                                className="btn-lg btn-block mt-3 p-3">
                                    Voltar
                                </Button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Delete