import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {

    //função de logout, ao clicar em Sair remove o token da sessão do usuário e o redireciona para a página inicial.
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render(){
        
        // NAVBAR mostrada quando o usuário está deslogado
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Registrar
                    </Link>
                </li>
            </ul>
        )

        // NAVBAR mostrada quando o usuário está logado.
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Perfil
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="_blank" onClick={this.logOut.bind(this)} className="nav-link">
                        Sair
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">

                {/* LOGOMARCA */}
                <a className="navbar-brand" href="/">Multicoisas</a>

                <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbar1" 
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Início
                            </Link>
                        </li>
                    </ul>
                    
                    {/* Lógica para saber se o usuário está logado ou não, se houver um token de usuário é mostrado a navbar userLink, se não é mostrada a loginRegLink */}
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)