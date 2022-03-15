import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class userProfileService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  error = "";
  currentUsername = "";

  isUserLoggedIn() {
    return !!localStorage.getItem("user_id");
  }

 public setUserProfile() {
    this.httpClient.get<userProfileDTO>("api/userProfile/getuserprofilebyname/" + this.currentUsername).subscribe(data => {
      localStorage.setItem("user_id", String(data.id));
      localStorage.setItem("currentweight", String(data.currenWeight));
      localStorage.setItem("goalweight", String(data.goalWeight));
      localStorage.setItem("lifestyle", String(data.lifestyle));
      localStorage.setItem("height", String(data.height));
    })
 }

 editUserProfilebyId(userProfile_Id: number): Observable<userProfileDTO[]> {
    return this.httpClient.get<userProfileDTO[]>('api/updateUserProfile/'+ userProfile_Id)
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
}

export interface userProfileDTO {
  id: number;
  currenWeight: number;
  goalWeight: number;
  lifestyle: string;
  height: number;
  user: string;
}
