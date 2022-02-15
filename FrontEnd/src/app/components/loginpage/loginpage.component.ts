import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.services";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor( public userServ: UserService) {
    this.userServ = userServ;

  }

  ngOnInit(): void {
  }

  login(userData: any){
    console.log(userData.value.username)
    this.userServ.login({username: userData.value.username, password: userData.value.password});
  }
}
