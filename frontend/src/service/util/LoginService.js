import axios from 'axios';
import { ServiceBase } from '../cadastros/ServiceBase';

export class LoginService extends ServiceBase {

    CHAVE_TOKEN = "";

constructor(){
    super("pessoa-gerenciamento");
}

login(email, senha, mensagemErro){
    axios.post(this.url+"login",{'email':email, 'senha':senha}).then(res=>{
        localStorage.setItem(this.CHAVE_TOKEN, res.data.token);
        window.location.href = "/";
    }).catch(error=>{
        mensagemErro(error.response.data.message);
    });
}

autenticado(){
    return localStorage.getItem(this.CHAVE_TOKEN)!=null;
}

sair(){
    localStorage.removeItem(this.CHAVE_TOKEN);
}

}