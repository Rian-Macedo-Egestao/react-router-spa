import React from "react";
import imagem from "../assets/img/pets_black_48dp.svg"

function Page404(){
    return(
        <div>
            <h1>
                <img src={imagem} alt="" />
               PAGINA INEXISTENTE (404)
            </h1>
            <p>
                Essa pagina não existe, volte à página inicial
            </p>
        </div>

    );
}

export default Page404;