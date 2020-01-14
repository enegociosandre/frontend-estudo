import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { FormaPagamento } from './../core/model';

@Injectable()
export class FormaPagamentoService {
    
    formaPagamentoUrl: string;

    constructor(private http: Http) { 

        this.formaPagamentoUrl = `http://localhost:8080/forma-pagamento`;
    }

}
