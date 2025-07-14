// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../product.interface';
<<<<<<< HEAD
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
=======
import { Location } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';

>>>>>>> b2873cfbeafe87f19cedab74bbb7c85116cd47c0

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule, CommonModule, MatIconModule]
=======
  imports: [FormsModule, CommonModule, MatIcon]
>>>>>>> b2873cfbeafe87f19cedab74bbb7c85116cd47c0
})

export class ProductComponent implements OnInit {

  products: Product[] = [];
  product: Product = { pdv: '', cod: '', chave: '', empresa: '', id: '' };
  isEditing = false;

  constructor(private productService: ProductService, private location: Location) {}

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
    console.log('Produto a enviar:', this.product);
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

      goBack(): void {
      this.location.back();
    }
}
