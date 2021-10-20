import React from "react";
import imagem from "../assets/img/pets_black_48dp.svg"

function Page404(){
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina"> <img src={imagem} alt="" />
               PAGINA INEXISTENTE (404)
            </h2>
         </div>
        <section className="container flex flex--centro">
            <article className="cartao">
            Essa pagina não existe, volte à página inicial
            </article>
        
        </section>
        </>

    );
}

export default Page404;