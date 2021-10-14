import axios from 'axios'

export const api = axios.create({
    baseURL:'https://localhost:5000'

});

export const busca = async() => {
    const resposta = await api.get("/posts");
    setDado(resposta.data)

}