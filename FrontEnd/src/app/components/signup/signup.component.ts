import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.services";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class signupComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  signup(userData: any) {
    console.log(userData.value)
    this.userService.registration({email:userData.value.email, username:userData.value.username, firstName:userData.value.firstName, lastName:userData.value.lastName, password:userData.value.password})
  }
}
