import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor() { }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }
}
