import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.interface';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/produtos`);
  }

  criarProduto(produto: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/produtos`, produto);
  }

  atualizarProduto(id: string, produto: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/produtos/${id}`, produto);
  }

  deletarProduto(cod: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/produtos/${cod}`);
  }
}
