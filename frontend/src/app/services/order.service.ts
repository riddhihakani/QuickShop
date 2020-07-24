import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductResponseModel } from '../models/order.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products: ProductResponseModel[] = [];
  private SERVICE_URL = environment.SERVICE_URL;
 
  constructor(private http: HttpClient) { }

  
  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(`${this.SERVICE_URL}orders/${orderId}`).toPromise();
  }
}
