import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  SERVICE_URL = environment.SERVICE_URL;
  constructor(private producService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.producService.getAllProducts().subscribe((prods) => {
      this.products = prods;
      console.log(this.products);
    });
  }

  selectProduct(id: Number) {
    return this.router.navigate(['/product', id]).then();
  }


}
