import React, {Component} from 'react'
import {editUser} from './UserFunctions'
import jwt_decode from 'jwt-decode'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class Edit extends Component{
    constructor(){
        super()
        this.state = {
            id: '',
            name: '',
            birth_date: '',
            email: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    // Pega o token da sessão atual e adquire os dados do usuário.
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name: decoded.name,
            birth_date: (decoded.birth_date).substring(0, 10),
            email: decoded.email
        })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    //Código de envio, utiliza a função editUser do UserFunctions.js e após editar as informações repassadas, ele retira o token da sessão e pede para o usuário relogar.
    onSubmit(e){
        e.preventDefault()

        const user = {
            name: this.state.name,
            birth_date: this.state.birth_date,
            email: this.state.email,
        }

        editUser(user).then(res => {
            localStorage.removeItem('usertoken')
            this.props.history.push('/login')
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <ValidatorForm ref="form" onSubmit={this.onSubmit} onError={errors => console.log(errors)}>
                            <h1 className="h3 mb-3 font-weight-normal">Editar credenciais</h1>

                            {/* NOME */}
                            <div className="form-group mt-3">
                                <TextValidator type="text" 
                                id="standard-basic" 
                                label="Nome" 
                                className="form-control" 
                                name="name" 
                                validators={['required', 'matchRegexp:^[a-zA-Z_ ]*$']}
                                errorMessages={['Esse campo é obrigatório', 'Apenas letras são permitidas']}
                                value={this.state.name} 
                                onChange={this.onChange}/>
                            </div>

                            {/* DATA DE NASCIMENTO */}
                            <div className="form-group">
                                <TextValidator type="date" 
                                id="date"
                                label="Data de nascimento"
                                className="form-control mt-3" 
                                name="birth_date"
                                value={this.state.birth_date} 
                                validators={['required']}
                                errorMessages={['Esse campo é obrigatório', 'Data incorreta']}
                                onChange={this.onChange}
                                InputLabelProps={{shrink: true}}/>
                            </div>

                            {/* EMAIL */} 
                            <div className="form-group">
                                <label htmlFor="email" className="mt-2">Endereço de email</label>
                                <TextField 
                                disabled
                                id="filled-disabled"
                                label={this.state.email}
                                variant="filled"
                                className="form-control"/>
                            </div>

                            {/* BOTÃO DE ENVIO */}
                            <Button type="submit" 
                            variant="contained" 
                            color="primary" 
                            className="btn-lg btn-block mt-2 p-2">
                                Editar
                            </Button>

                            {/* BOTÃO DE VOLTAR */}
                            <a href="/profile">
                                <Button type="button" 
                                variant="contained" 
                                color="default" 
                                className="btn-lg btn-block mt-3 p-2">
                                    Voltar
                                </Button>
                            </a>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit