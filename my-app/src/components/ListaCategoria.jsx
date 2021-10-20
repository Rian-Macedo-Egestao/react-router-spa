import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css"

const ListaCategoria = () => {
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
       busca('/categorias', setCategoria)
    }, [])

    return(
        <ul className="lista-categorias container flex">
            {categoria.map((categoria)=>{return(
                <Link to={`/categoria/${categoria.id}`}>
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                        {categoria.nome}
                    </li>
                </Link>
            )})}
        </ul>
    );
}

export default ListaCategoria;