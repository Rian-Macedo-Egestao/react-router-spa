import React from 'react'
import ListaPost from '../components/ListaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <section className="container flex flex--centro">
      <ListaPost url={'/posts'}></ListaPost>
      </section>

    </main>
  )
}

export default Home
