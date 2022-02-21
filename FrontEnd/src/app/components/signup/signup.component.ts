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
this.userService.register({email:userData.value.email,username:userData.value.username,firstname:userData.value.firstname,lastname:userData.value.lastname,password:userData.value.password})
  }
}
