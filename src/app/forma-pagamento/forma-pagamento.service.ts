import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';


import { FormaPagamento } from './../core/model';

@Injectable()
export class FormaPagamentoService {
    formaPagamentoUrl: string;
    constructor(private http: Http) { 
        this.formaPagamentoUrl = `http://www.mocky.io/v2/5e1fbefc3000005f00d1ea1b`;
    }
    pesquisar(): Promise<any> {
        const headers = new Headers();    
        return this.http.get(`${this.formaPagamentoUrl}`, { headers })
        .toPromise()
        .then(response => {
            const responseJson = response.json();
            const formaPagamento = responseJson;
            const resultado = { formaPagamento };
          return resultado;
        })
      }
}