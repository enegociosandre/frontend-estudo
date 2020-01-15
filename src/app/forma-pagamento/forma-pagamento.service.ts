import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';


import { FormaPagamento } from './../core/model';

@Injectable()
export class FormaPagamentoService {
    formaPagamentoUrl: string;
    constructor(private http: Http) { 
        this.formaPagamentoUrl = `http://www.mocky.io/v2/5e1e4313360000f3c5c746b4`;
    }
    pesquisar(): Promise<any> {
        const headers = new Headers();    
        return this.http.get(`${this.formaPagamentoUrl}`, { headers })
        .toPromise()
        .then(response => {
            const responseJson = response.json();
            //const formaPagamento = responseJson.console;
            const formaPagamentoAntes = responseJson;
            
            const resultadoAntes = { formaPagamentoAntes };
            // const formaPagamento = JSON.stringify(resultadoAntes); error conversin array
            // const formaPagamento = responseJson.console; //error [object object]]
             //const formaPagamento = responseJson; //error val slice
            // const formaPagamento = resultadoAntes; error val slice
            const formaPagamento = [{"codigo":"1","nome":"veio da service"}];
            const resultado = { formaPagamento };
            console.log("[Service]" + "Response:" + response);
            console.log("[Service]" + "ResponseJson:" + responseJson);
            console.log("[Service]" + "ResponseJsonStringFy:" + JSON.stringify(responseJson));
            console.log("[Service]" + "ResponseJson.content:" + responseJson.content);
            console.log("[Service]" + "formaPagamento:" + formaPagamento);
            console.log("[Service]" + "formaPagamentoStringFy:" + JSON.stringify(formaPagamento));
            console.log("[Service]" + "resultado:" + resultado);
            console.log("[Service]" + "resultadoStringFy:" + JSON.stringify(resultado));

          return resultado;
        })
      }
}