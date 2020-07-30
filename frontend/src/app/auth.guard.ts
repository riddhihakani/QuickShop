import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './services/register.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private regService:RegisterService,
              private router : Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.regService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.regService.deleteToken();
        return false;
      }
    
    
      return true;
  }
  
}
