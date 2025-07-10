// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})

export class ProductComponent implements OnInit {

  products: Product[] = [];
  product: Product = { pdv: '', cod: '', chave: '', empresa: '', id: '' };
  isEditing = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listarProdutos();
    console.log('componente carregado');
    console.log(this.products);

  }

  listarProdutos(): void {
    this.productService.listarProdutos().subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  criarOuAtualizarProduto(): void {
    if (this.isEditing) {
      this.productService.atualizarProduto(this.product.cod, this.product).subscribe(() => {
        this.resetarFormulario();
        this.listarProdutos();
      });
    } else {
      this.productService.criarProduto(this.product).subscribe(() => {
        this.resetarFormulario();
        this.listarProdutos();
      });
    }
  }

  editarProduto(produto: Product): void {
    this.product = { ...produto };
    this.isEditing = true;
  }

  deletarProduto(id: string): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.productService.deletarProduto(id).subscribe(() => {
        this.listarProdutos();
      });
    }
  }

  resetarFormulario(): void {
    this.product = { pdv: '', cod: '', chave: '', empresa: '', id: "" };
    this.isEditing = false;
  }
}
