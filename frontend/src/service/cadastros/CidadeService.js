import axios from 'axios';
import { ServiceBase } from './ServiceBase';

export class CidadeService extends ServiceBase{

    constructor(){
        super("cidade")
    }
}