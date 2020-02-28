import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductI } from '../interfaces/Product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: String = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<ProductI[]> {
    console.log(this.apiUrl);
    return this.http.get<ProductI[]>(`${this.apiUrl}/product`);
  }

  getProduct(id: String): Observable<ProductI> {
    return this.http.get<ProductI>(`${this.apiUrl}/product/${id}`);
  }

  createProducts(product: ProductI): Observable<ProductI> {
    return this.http.post<ProductI>(`${this.apiUrl}/product/create`, product);
  }

  deleteProducts(id: String): Observable<ProductI> {
    return this.http.delete<ProductI>(`${this.apiUrl}/product/delete?id=${id}`);
  }

  updateProducts(id: String, product: ProductI): Observable<ProductI> {
    return this.http.put<ProductI>(`${this.apiUrl}/product/update?id=${id}`, product);
  }

}
