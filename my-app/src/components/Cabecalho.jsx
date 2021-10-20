import React from "react";
import imagem from "../assets/img/doguito.svg";
import { Link } from "react-router-dom";
import "../assets/css/componentes/cabecalho.css";

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
                <li><Link to="/" className="menu-item menu-item--entrar">Entrar</Link></li>
                <li><Link to="/produtos" className="menu-item menu-item">Produtos</Link></li>
                <li><Link to="/" className="menu-item menu-item">Blog</Link></li>
                <li><Link to="/sobre" className="menu-item menu-item">Sobre</Link></li>
            </ul>
        </div>
    </header>
    )
}
export default Cabecalho;