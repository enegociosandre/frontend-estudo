import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { FormaPagamentoService } from '../forma-pagamento.service';


@Component({
  selector: 'app-forma-pagamento-pesquisa',
  templateUrl: './forma-pagamento-pesquisa.component.html',
  styleUrls: ['./forma-pagamento-pesquisa.component.css']
})
export class FormaPagamentoPesquisaComponent implements OnInit {

  formaPagamento = [{"codigo":"1","nome":"veio do componente"}];
  //formaPagamento = [];
  @ViewChild('tabela') grid;

  constructor(
    private formaPagamentoService: FormaPagamentoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private toasty: ToastyService,
    private title: Title
  ){}

  ngOnInit() {
    this.title.setTitle('Pesquisa de recorrencias');
  }

  pesquisar() {
    this.formaPagamentoService.pesquisar()
      .then(resultado => { this.formaPagamento = resultado.formaPagamento
        //this.formaPagamento = 
        //resultado.map(formaPagamento=> ({ label: formaPagamento.codigo, value: formaPagamento.nome}));
        //this.formaPagamento.map(resultado =>({label: formaPagamento.codigo, value: formaPagamento.nome}));
        console.log("[Componente] Esse é o resultado: " + (resultado));
      })
      .catch(erro => {
        this.errorHandler.handle(erro)
        console.log("Deu erro:" + erro)
      });

  }

  aoMudarPagina(event: LazyLoadEvent) {
    this.pesquisar();
  }

}
