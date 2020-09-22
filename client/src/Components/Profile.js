import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import Button from '@material-ui/core/Button';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            birth_date: '',
            email: ''
        }
    }

    // Pega o token da sessão atual e adquire os dados do usuário.
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name: decoded.name,
            birth_date: decoded.birth_date,
            email: decoded.email
        })
    }

    render(){
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Perfil</h1> 
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nome</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Data de Nascimento</td>
                                <td>{this.state.birth_date}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col-sm-8 mx-auto">
                        <a href="/edit">
                            <Button type="button" variant="contained" color="primary" className="btn-lg btn-block mt-4 p-3">
                                Editar credenciais
                            </Button>
                        </a> 
                        <a href="/delete">
                            <Button type="button" variant="contained" color="secondary" className="btn-lg btn-block mt-2 p-3">
                                Deletar usuário
                            </Button>
                        </a> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile