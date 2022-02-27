import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../interfaces/User";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }


  authenticated = false;
  error = "";
  currentUsername = "";
  //loggedInUser = <User>{};


  isUserLoggedIn() {
    return !!localStorage.getItem("username");
  }

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ":" + password)})
    return this.httpClient.get("api/users/login", {headers, responseType: 'text' as 'json'}).pipe(map((res)=> {
      this.successfulLogin(username);
    }))

  }
  //     .subscribe(data=> {
  //     console.log(data);
  //     if(data==="Login Successful") {
  //       this.successfulLogin(username);
  //       this.router.navigateByUrl('/welcomepage')
  //     }
  //   })
  // }

  public successfulLogin(username: string) {

    localStorage.setItem('username', username);
    this.currentUsername = username;
    //console.log("authenticated!")
    this.authenticated = true;

  }

  public Logout() {
    this.httpClient.get("/api/users/logout").subscribe(data => {
      console.log("Logout Successful")
      console.log(data)
    })
    localStorage.removeItem("username");
    this.currentUsername = "";
    this.authenticated = false;
  }



  public getSpecificUserInfo(): Observable<userDTO> {
    return this.httpClient.get<userDTO>("api/users/getLoggedInUser/" + this.currentUsername);
  }
  // login(user:User) {
  //   this.httpClient.get<User>(`api/users/${user.username}/${user.password}`).subscribe((data: User) => {
  //     console.log(data)
  //     if (data.username) {
  //       this.authenticated = true;
  //       console.log("User data " + JSON.stringify(data))
  //       this.loggedInUser = data
  //       this.router.navigateByUrl('/welcomepage');
  //     } else {
  //       this.authenticated = false;
  //     }
  //   })
  // }

  // getLoggedInUser() {
  //   this.httpClient.get<User>('api/users/getloggedinuser').subscribe((data) => {
  //     console.log("User data " + JSON.stringify(data))
  //     this.loggedInUser = data;
  //   })
  // }

  registration(user:User){
    this.httpClient.post<User>('api/users/register', user).subscribe(() => {
      this.router.navigateByUrl('/loginpage')
    });
  }
}

export interface userDTO {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  roles: string;
}
