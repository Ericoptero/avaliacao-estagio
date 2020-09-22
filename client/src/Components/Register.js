import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import {register} from './UserFunctions'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class Register extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            birth_date: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    //Pega os dados do formulário, transforma num objeto e envia para a solicitação HTTP register criada no UserFunctions. Após isso redireciona o usuário para a tela de login.
    onSubmit(e){
        e.preventDefault()

        const user = {
            name: this.state.name,
            birth_date: this.state.birth_date,
            email: this.state.email,
            password: this.state.password
        }
        register(user).then(res => {
            this.props.history.push('/login')
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        {/* Inicio do formulário, validando utilizando o react-material-ui-validator */}
                        <ValidatorForm ref="form" onSubmit={this.onSubmit} onError={errors => console.log(errors)}>
                            <h1 className="h3 mb-3 font-weight-normal">Registro</h1>

                            {/* Campo nome */}
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

                            {/* Campo data de nascimento */}
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

                            {/* Campo de email */}
                            <div className="form-group">
                                <TextValidator type="email"
                                id="standard-basic" 
                                label="Email"  
                                className="form-control mt-3" 
                                name="email"
                                validators={['required', 'isEmail']}
                                errorMessages={['Esse campo é obrigatório', 'Email não valido']}
                                value={this.state.email} 
                                onChange={this.onChange}/>
                            </div>

                            {/* Campo de senha */}
                            <div className="form-group">
                                <TextValidator type="password" 
                                id="standard-basic" 
                                label="Senha" 
                                className="form-control mt-3" 
                                name="password"
                                validators={['required', 'minStringLength:4']}
                                errorMessages={['Esse campo é obrigatório', 'Sua senha precisa de no mínimo 4 dígitos']}
                                value={this.state.password} 
                                onChange={this.onChange}/>
                            </div>

                            {/* Botão de registro */}
                            <Button type="submit" 
                            className="btn btn-lg btn-primary btn-block p-3 mt-3" 
                            variant="contained" 
                            color="primary">
                                Registrar
                            </Button>
                            
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register