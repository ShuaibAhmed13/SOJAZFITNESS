import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/User";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  authenticated = false;
  error = "";
  loggedInUser = <User>{};


  login(user:User) {
    this.httpClient.get<User>(`api/users/login/${user.username}/${user.password}`).subscribe((data: User) => {
      console.log(data)
      if (data.username) {
        this.authenticated = true;
        console.log("User data " + JSON.stringify(data))
        this.loggedInUser = data
        this.router.navigateByUrl('/welcomepage');
      } else {
        this.authenticated = false;
      }
    })
  }

  getLoggedInUser() {
    this.httpClient.get<User>('api/users/getloggedinuser').subscribe((data) => {
      console.log("User data " + JSON.stringify(data))
      this.loggedInUser = data;
    })
  }



  createUser(user: User) {
    this.httpClient.post<User>('api/users/user',user).subscribe(data => {
    });
  }
}
