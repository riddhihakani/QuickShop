import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  categories : any[] = [];

  constructor(private categoryService : CategoryService) { }
  
  getCategory(){
    this.categoryService.getAllCategories().subscribe((category : {categories : any[]}) => {
      this.categories = category.categories;
      console.log(this.categories);
    });
  }

  ngOnInit(): void {
  }

  
}
