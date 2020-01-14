import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormaPagamentoRoutingModule } from './forma-pagamento-routing.module';
import { FormaPagamentoCadastroComponent } from './forma-pagamento-cadastro/forma-pagamento-cadastro.component';
import { FormaPagamentoPesquisaComponent } from './forma-pagamento-pesquisa/forma-pagamento-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    FormaPagamentoRoutingModule
  ],
  declarations: [FormaPagamentoCadastroComponent, FormaPagamentoPesquisaComponent]
})
export class FormaPagamentoModule { }
