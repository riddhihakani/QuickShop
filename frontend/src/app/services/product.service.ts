import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {ProductModelServer, serverResponse} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SERVICE_URL = environment.SERVICE_URL;
  constructor(private http: HttpClient) { }

  getAllProducts(): any {
    return this.http.get(this.SERVICE_URL + '/products');

  }

  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.SERVICE_URL + '/products/' + id);
  }

  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.SERVICE_URL + 'products/category/' + catName);
  }
}
