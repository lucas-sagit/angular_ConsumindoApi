import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  pdv: string;
  cod: string;
  chave: string;
  empresa: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceProduct {
  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/produtos`);
  }

  criarProduto(produto: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/produtos`, produto);
  }

  atualizarProduto(cod: string, produto: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/produtos/${cod}`, produto);
  }

  deletarProduto(cod: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/produtos/${cod}`);
  }
}
