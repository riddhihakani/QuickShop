import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  categories : any[] = [];

  constructor(private categoryService : CategoryService,
              private cartService: CartService,
              private regService: RegisterService) { }
  
  cartData: CartModelServer;
  cartTotal: number;
  authState: boolean;
  getCategory(){
    this.categoryService.getAllCategories().subscribe((category : {categories : any[]}) => {
      this.categories = category.categories;
      console.log(this.categories);
    });
  }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    // this.regService.authState$.subscribe(authState => this.authState = authState);
  }

  
}
