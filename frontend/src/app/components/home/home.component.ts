import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  SERVICE_URL = environment.SERVICE_URL;
  constructor(private producService: ProductService,
              private router: Router,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.producService.getAllProducts().subscribe((prods) => {
      this.products = prods;
      console.log(this.products);
    });
  }

  selectProduct(id: Number) {
    return this.router.navigate(['/product', id]).then();
  }

  AddtoCart(id: number){
    this.cartService.AddProductToCart(id);
  }


}
