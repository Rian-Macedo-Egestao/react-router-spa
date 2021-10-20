import React from 'react'
import ListaCategoria from '../components/ListaCategoria'
import ListaPost from '../components/ListaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
     
      <ListaCategoria url={'/categorias'}></ListaCategoria>

      <ListaPost url={'/posts'}></ListaPost>
      

    </main>
  )
}

export default Home
