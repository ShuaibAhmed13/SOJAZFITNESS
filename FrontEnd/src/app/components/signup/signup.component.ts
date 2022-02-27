import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class signupComponent implements OnInit {

  error: string = "";
  constructor(public userService:UserService, public router: Router) { }

  ngOnInit(): void {
  }

  signup(userData: any) {
    if(!userData.valid) {
      this.error = "Please fill in all the fields!";
    }
    else if(userData.value.password !== userData.value.passwordconfirm) {
      this.error = "Passwords do not match";
    } else {
      //console.log(userData.value)
      this.userService.registration({
        email: userData.value.email,
        username: userData.value.username,
        firstName: userData.value.firstName,
        lastName: userData.value.lastName,
        password: userData.value.password
      }).subscribe(data => {
        console.log("Successfully Registered!");
        this.router.navigateByUrl('/loginpage');
      },
        error1=> {
        this.error = error1.error.text;
        if(error1.error.text == "Registered Successfully") {
          this.router.navigateByUrl('/loginpage');
        }
        })
    }
  }
}
