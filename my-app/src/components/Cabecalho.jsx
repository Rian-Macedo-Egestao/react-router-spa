import React from "react";
import imagem from "../assets/img/doguito.svg"
import "../assets/css/componentes/cabecalho.css"

const Cabecalho = () => {

    return (
    <header className="cabecalho container">
        <div className="menu-hamburguer">
            <span className="menu-hamburguer__icone"></span>
        </div>
        <div className="cabecalho-container">
            <a href="/" className="flex flex--centro">
                <img className="cabecalho__logo" src={imagem} alt="" />
                <h1 className="cabecalho__titulo">PetShop</h1>
            </a>
        </div>
        <div className="menu-cabecalho">
            <ul className="menu-itens">
                <li><a href="#" className="menu-item menu-item--entrar">entrar</a></li>
                <li><a href="#" className="menu-item menu-item">produtos</a></li>
                <li><a href="#" className="menu-item menu-item">blog</a></li>
                <li><a href="#" className="menu-item menu-item">sair</a></li>
            </ul>
        </div>
    </header>
    )
}
export default Cabecalho;