import { Component } from '@angular/core';
import {Produto} from '../../shared/modelo/produto';
import {PRODUTOS} from '../../shared/modelo/PRODUTOS';
@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent {

  produtos = PRODUTOS;
  excluir(produtoARemover: Produto): void {
    const indx = this.produtos.findIndex(produto =>
        produto.id === produtoARemover.id);

    this.produtos.splice(indx, 1);
  }
}
