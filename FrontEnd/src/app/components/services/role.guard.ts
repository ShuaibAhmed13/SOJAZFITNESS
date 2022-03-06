import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.services";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }
  canActivate() {
    if(this.userService.isUserAdmin()) {
      return true;
    }
    alert("You cannot access this page!")
    return this.router.navigateByUrl('/welcomepage');
  }

}
