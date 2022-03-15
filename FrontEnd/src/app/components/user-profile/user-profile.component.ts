import { Component, OnInit } from '@angular/core';
import {userDTO, UserService} from "../services/user.services";
import {Router} from "@angular/router";
import {userProfileDTO, userProfileService} from "../services/userProfile.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  users: userProfileDTO[] = [];
  constructor(private userProfileService: userProfileService, private router: Router) { }

  ngOnInit(): void {

  }

  logout() {
    this.userProfileService.Logout();
    this.router.navigateByUrl("/loginpage");
  }

/*  getallUsersProfile() {
    this.userProfileService.setUserProfile(data => {
      this.users = data;
    })
  }*/



}
