import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.services";

@Injectable({
  providedIn: 'root'
})
export class LoggedinauthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }
  canActivate() {
    if (this.userService.isUserLoggedIn()) {
      return this.router.navigateByUrl('/welcomepage');
    }
    return true;
  }

}
