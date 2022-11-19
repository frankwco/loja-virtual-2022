import { ServiceBase } from './ServiceBase';

export class ProdutoImagensService extends ServiceBase {

constructor(){
    super("produtoImagens");
}

uploadImagens(obj){
    const formData = new FormData();
    formData.append('idProduto', obj.idProduto);
    formData.append('file', obj.file);
    const config ={
        headers :{
            'content-type':'multipart/form-data'
        }
    }
    return this.axiosInstance.post(this.url, formData, config);
}

buscarPorProduto(idProduto){
    return this.axiosInstance.get(this.url+"produto/"+idProduto);
}

}