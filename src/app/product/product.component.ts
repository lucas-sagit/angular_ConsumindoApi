// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceProduct, Product } from '../serviceprodut';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
  imports: [FormsModule]
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  product: Product = { pdv: '', cod: '', chave: '', empresa: '' };
  isEditing = false;

  constructor(private service: ServiceProduct) { }

  ngOnInit(): void {
    this.listarProdutos();
    console.log('componente carregado');
    console.log(this.products);

  }

  listarProdutos(): void {
    this.service.listarProdutos().subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  criarOuAtualizarProduto(): void {
    if (this.isEditing) {
      this.service.atualizarProduto(this.product.cod, this.product).subscribe(() => {
        this.resetarFormulario();
        this.listarProdutos();
      });
    } else {
      this.service.criarProduto(this.product).subscribe(() => {
        this.resetarFormulario();
        this.listarProdutos();
      });
    }
  }

  editarProduto(produto: Product): void {
    this.product = { ...produto };
    this.isEditing = true;
  }

  deletarProduto(cod: string): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.service.deletarProduto(cod).subscribe(() => {
        this.listarProdutos();
      });
    }
  }

  resetarFormulario(): void {
    this.product = { pdv: '', cod: '', chave: '', empresa: '' };
    this.isEditing = false;
  }
}
