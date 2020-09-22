import React, {Component} from 'react'

class Landing extends Component {
    render(){
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">

                        {/* Título */}
                        <h1 className="text-center">Seja bem vindo à Multicoisas!</h1>

                        {/* Slide */}
                        <div id="carouselExampleControls" className="carousel slide mt-5" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" height="300px" src="https://www.promobit.com.br/blog/wp-content/uploads/2020/06/02123022/multicoisas.jpg" alt="Multicoisas" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" height="300px" src="https://mercadoeconsumo.com.br/wp-content/uploads/2018/08/Multicoisas-inaugura-loja-com-universidade-corporativa-768x513.jpg" alt="Em tudo quanto é lugar" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" height="300px" src="https://www.plazacasaforte.com.br/files/store/15368557471825-multicoisas01.jpg" alt="Mais de 400 itens" />
                                </div>
                            </div>
                            {/* Botões do slide */}
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Próximo</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Anterior</span>
                            </a>
                        </div>                
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing