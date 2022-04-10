import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.services";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  error: string = "";

  constructor(public userServ: UserService, public router: Router, private toastr: ToastrService) {
    this.userServ = userServ;
  }

  ngOnInit(): void {

  }

  // login(userData: any){
  //   console.log(userData.value.username)
  //   this.userServ.login({username: userData.value.username, password: userData.value.password});
  // }
  login(userData: any) {
    let username = userData.value.username;
    let password = userData.value.password;
    let active = true;
    this.userServ.getUserActiveByUsername(username).subscribe(data => {
        active = data;
        if (active === false) {
          console.log("USER SUSPENDED")
          this.error = "User is suspended!";
          return;
        } else if (username != null && username != "" && password != null && password != "") {
          this.userServ.login(username, password).subscribe(data => {
              this.toastr.success("Welcome " + username + "!");
              this.router.navigateByUrl('/welcomepage');
            },
            error => {
              console.log(error);
              this.error = "Invalid Credentials!";
            });
        } else {
          this.error = "Please fill in the fields!";
        }
      }
    )


  }
}
