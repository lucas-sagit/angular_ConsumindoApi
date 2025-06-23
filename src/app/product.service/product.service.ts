import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-product.service',
  imports: [],
  templateUrl: './product.service.html',
  styleUrl: './product.service.scss'
})

export class ProductService {
  pdv: String = '';
  cod: String = '';
  chave: String = '';
  empresa: String = '';
}


@Injectable({
  providedIn: 'root'
})

export class ServiceProduct  {

  private apiUrl: string = 'https://localhost:8080';

  constructor(private http: HttpClient) {}

  listarProdutos() {
    return this.http.get(`${this.apiUrl}/produtos`);
  }

  criarProduto(produto: any) {
    return this.http.post(`${this.apiUrl}/produtos`, produto);
  }

  atualizarProduto(cod: string, produto: any) {
    return this.http.put(`${this.apiUrl}/produtos/${cod}`, produto);
  }

  deletarProduto(cod: string) {
    return this.http.delete(`${this.apiUrl}/produtos/${cod}`);
  }

}
