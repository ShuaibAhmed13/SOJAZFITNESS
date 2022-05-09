import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.services";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public authenticated: boolean = false;

  constructor(public router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.checkAuthenticated();
  }
  pageOneDisplay(): void {
    this.router.navigateByUrl("/welcomepage")
  }

  pageTwoDisplay(): void {
    this.router.navigateByUrl("/aboutus")
  }

  pageThreeDisplay(): void {
    this.router.navigateByUrl("/workoutmanual")
  }
  pageFourDisplay(): void {
    this.router.navigateByUrl("/myprogress")
  }

  pageFiveDisplay() {
    this.router.navigateByUrl("/exercisepost")
  }

  pageSixDisplay() {
    this.router.navigateByUrl("/userprofile")
  }

  logout() {
    this.userService.Logout();
    this.router.navigateByUrl("/loginpage");
  }


  checkIfAdmin():boolean {
    let roles = localStorage.getItem("user_role");
    if(roles !== null && roles.match("ROLE_ADMIN")) {
      return true;
    }
    return false;
  }

  adminDisplay() {
    this.router.navigateByUrl("/adminpanelpage")
  }

  foodDiaryPage() {
    this.router.navigateByUrl("/fooddiary")
  }

  checkAuthenticated() {
    if(localStorage.getItem("username") !== null) {
      this.authenticated = true;
    }
    else {
      this.authenticated = false;
    }
  }

  signUpPage() {
    this.router.navigateByUrl("/signup")
  }

  logInPage() {
    this.router.navigateByUrl("/loginpage")
  }

  pageSevenDisplay() {
    this.router.navigateByUrl("/videosearch")
  }
}
