import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../interfaces/User";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Muscle} from "../interfaces/Muscle";
import {SearchfilterPipe} from "../pipes/searchfilter.pipe";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router, private filterPipe: SearchfilterPipe) { }


  error = "";
  currentUsername = "";
  users = <User[]> [];
  usersLogin = <userDTO[]> [];
  //loggedInUser = <userDTO>{};


  isUserLoggedIn() {
    return !!localStorage.getItem("username");
  }

  isUserAdmin() {
    // @ts-ignore
    if(localStorage.getItem("user_role") != null && localStorage.getItem("user_role").match("ROLE_ADMIN")) {
      return true;
    }
    return false;
  }
  getUserActiveByUsername(username: string): Observable<boolean> {
    return this.httpClient.get<boolean>("api/users/getuseractivebyusername/" + username);
  }

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ":" + password)})
    return this.httpClient.get("api/users/login", {headers, responseType: 'text' as 'json'}).pipe(map((res)=> {
      this.successfulLogin(username);
    }))

  }

  confirmEmail(emailToken: String){
    this.httpClient.get<User[]>(`api/users/getUser/${emailToken}`).subscribe(data => {
      console.log("success confirmation email")
      this.users = data
    })
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
    this.setSpecificUserInfo();
    //console.log("authenticated!")

  }

  public Logout() {
    this.httpClient.get("/api/users/logout").subscribe(data => {
      console.log("Logout Successful")
      console.log(data)
    })
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_role");
    this.currentUsername = "";
  }



  public setSpecificUserInfo() {
    this.httpClient.get<userDTO>("api/users/crud/getLoggedInUser/" + this.currentUsername).subscribe(data => {
        localStorage.setItem("user_id", String(data.id));
        localStorage.setItem("user_role", data.roles);
      }
    );
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

  registration(user:User): Observable<string>{
    return this.httpClient.post<string>('api/users/register', user);
    //   .subscribe(() => {
    //   this.router.navigateByUrl('/loginpage')
    // });
  }

  getAllUsers(): Observable<userDTO[]> {
    return this.httpClient.get<userDTO[]>('api/users/crud/getUsers');
  }

  deleteUser(user_id: number): Observable<string> {
    return this.httpClient.delete<string>('/api/users/crud/deleteuserbyid/' + user_id)
  }
  suspendUser(user_id: number) {
    return this.httpClient.get('/api/users/crud/suspenduser/' + user_id);
  }

  reactivateUser(user_id:number) {
    return this.httpClient.get('/api/users/crud/reactivateuser/' + user_id);
  }

  getAllEmail(){
    this.httpClient.get<User[]>('api/users/getAll').subscribe(data =>{
      console.log(data);
      this.users = data;
    })
  }

 /* updateMuscle(muscleId: number, muscle: Muscle): Observable<string> {
    return this.httpClient.put<string>('api/muscle/crud/updatemuscle/' + muscleId, muscle);
  }*/

  updatePassword(userPassword: string, user: User): Observable<string>{
    return this.httpClient.put<string>('/crud/updatePassword/{password}' + userPassword, user);
  }

}

export interface userDTO {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  roles: string;
  active: boolean;
}

