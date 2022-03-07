import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.services";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, private userService: UserService) { }

  ngOnInit(): void {
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

}
