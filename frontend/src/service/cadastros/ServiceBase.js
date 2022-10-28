import axios from 'axios';

export class ServiceBase{

    
    constructor(urlBase){
        this.url = process.env.REACT_APP_URL_API+'/'+urlBase+'/';
    }
    

    listarTodos() {
        return axios.get(this.url);
    }

    inserir(objeto) {
        return axios.post(this.url,objeto);
    }

    alterar(objeto) {
        return axios.put(this.url,objeto);
    }
    
    excluir(id) {
        return axios.delete(this.url+id);
    }
}