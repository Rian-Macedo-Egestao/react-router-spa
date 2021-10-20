import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router'
import { busca } from '../api/api'
import ListaCategoria from '../components/ListaCategoria'
import ListaPost from '../components/ListaPost'
import { Link } from 'react-router-dom'
import SubCategoria from './SubCategoria'


const Categoria = () => {
  const {id} = useParams()
  const {path, url} = useRouteMatch()
  const [subCategorias, setSubcategorias] = useState([])

  useEffect(() => {
      busca(`/categorias/${id}`, (categoria) =>{
          setSubcategorias(categoria.subcategorias);
      })
  }, [id])

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      
      <ListaCategoria></ListaCategoria>

      <ul className="lista-categorias container flex">

          {
              subCategorias.map((subcategoria) => { return(
                  <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
                     <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
                  </li>
              )
                 
              })
          }
        
      </ul>
      <Switch>
        <Route exact path={`${path}/:subcategoria`}>
            <SubCategoria/>
        </Route>
        <Route exact path={`${path}/`}>
            <ListaPost url={`/posts?categoria=${id}`}></ListaPost>
        </Route>
      </Switch>
      
    </main>
  )
}

export default Categoria