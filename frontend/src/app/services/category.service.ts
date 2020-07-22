import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private SERVICE_URL = environment.SERVICE_URL;
  constructor(private http : HttpClient) { }

  getAllCategories(){
    return this.http.get(this.SERVICE_URL + '/categories');
  }
}
