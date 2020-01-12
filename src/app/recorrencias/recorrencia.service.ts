import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecorrenciaService {

  recorrenciasUrl = 'http://localhost:8080/recorrencias';

  constructor(private http: Http) { }

  listarTodas(): Promise<any> {
    const headers = new Headers();

    return this.http.get(this.recorrenciasUrl, { headers })
      .toPromise()
      .then(response => response.json());
  }

}