import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.services";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public userService: UserService, public router: Router) {
  }
  canActivate() {
    if(!this.userService.isUserLoggedIn()) {
      return this.router.navigateByUrl('/loginpage');
    }
    return true;
  }



}
