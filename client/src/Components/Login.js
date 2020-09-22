import React, {Component} from 'react'
import {login} from './UserFunctions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    //Código de login, utiliza a função login do UserFunctions.js e após isso adiciona o token da sessão do usuário e o redireciona para /profile
    onSubmit(e){
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Faça Login</h1>
                            
                            {/* EMAIL */}
                            <div className="form-group">
                                <TextField type="email" 
                                id="standard-basic" 
                                label="Email" 
                                className="form-control mt-3" 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.onChange}/>
                            </div>

                            {/* PASSWORD */}
                            <div className="form-group">
                                <TextField type="password" 
                                id="standard-basic" 
                                label="Senha" 
                                className="form-control mt-3" 
                                name="password"
                                value={this.state.password} 
                                onChange={this.onChange}/>
                            </div>

                            {/* BOTÃO DE LOGIN */}
                            <Button type="submit" 
                            variant="contained" 
                            color="primary" 
                            className="btn-lg btn-block mt-4 p-3">
                                Entrar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login