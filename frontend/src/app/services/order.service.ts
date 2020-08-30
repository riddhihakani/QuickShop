import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products: ProductResponseModel[] = [];
  private SERVICE_URL = environment.SERVICE_URL;
 
  constructor(private http: HttpClient) { }

  
  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(this.SERVICE_URL + '/orders/' + orderId).toPromise();
  }
}


interface ProductResponseModel {
  // id: number;
  // title: string;
  // description: string;
  // price: number;
  // quantityOrdered: number;
  // image: string;
  id: number;
  name: string;
  category: string;
  subcategory: string;
  sizes: [];
  supplier:string;
  brand:string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}