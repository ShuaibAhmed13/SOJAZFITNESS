import {Component, HostListener, OnInit} from '@angular/core';
import {UserService} from "../services/user.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newnavbar',
  templateUrl: './newnavbar.component.html',
  styleUrls: ['./newnavbar.component.scss']
})
export class NewnavbarComponent implements OnInit {

  showmenu: boolean = true;
  public innerWidth: any;
  private _event: any;
  public authenticated = false;


  checkIfAdmin():boolean {
    let roles = localStorage.getItem("user_role");
    if(roles !== null && roles.match("ROLE_ADMIN")) {
      return true;
    }
    return false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._event = event;
    this.innerWidth = window.innerWidth;
    this.autoToggleBurgerMenu()
  }

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.autoToggleBurgerMenu();
    this.checkAuthenticated();
    this.checkIfAdmin();
  }



  checkAuthenticated() {
    if(localStorage.getItem("username") !== null) {
      this.authenticated = true;
    }
    else {
      this.authenticated = false;
    }
  }

  logout() {
    this.userService.Logout();
    this.router.navigateByUrl("/loginpage");
  }

  autoToggleBurgerMenu() {
    if(innerWidth > 1000) {
      this.showmenu = true
    } else if (innerWidth <=1000) {
      this.showmenu = false
    }

  }

  toggleBurgerMenu() {
    this.showmenu = !this.showmenu;
  }
}
