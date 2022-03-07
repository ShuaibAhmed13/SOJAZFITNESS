import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.Logout();
    this.router.navigateByUrl("/loginpage");
  }
}
