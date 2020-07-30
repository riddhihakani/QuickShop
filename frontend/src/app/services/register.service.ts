import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  SERVICE_URL = environment.SERVICE_URL;
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
    repassword : '',
    number: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post(environment.SERVICE_URL+'/users/register',user);
  }

  login(authCredentials) {
    return this.http.post(environment.SERVICE_URL + '/users/authenticate', authCredentials,this.noAuthHeader);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
