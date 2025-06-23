// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceProduct, Product } from ' service-product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  product: Product = { pdv: '', cod: '', chave: '', empresa: '' };
  isEditing = false;

  constructor(private service: ServiceProduct) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.service.listarProdutos().subscribe(res => {
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
