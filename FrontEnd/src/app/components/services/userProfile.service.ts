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
      localStorage.setItem("currentweight", String(data.currentWeight));
      localStorage.setItem("goalweight", String(data.goalWeight));
      localStorage.setItem("lifestyle", String(data.lifestyle));
      localStorage.setItem("height", String(data.height));
      localStorage.setItem("currentcalories", String(data.currentCalories));
      localStorage.setItem("goalcalories", String(data.goalCalories));
      localStorage.setItem("sex", String(data.sex));
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

  getUserProfileByUserId(user_id: number) :Observable<userProfileDTO> {
    return this.httpClient.get<userProfileDTO>("/api/userProfile/getuserprofilebyuserid/" + user_id);
  }

  UpdateUserProfile(user_id: number, userProfile: {currentweight: any, goalweight: any, lifestyle: any, height: any}): Observable<string> {
    return this.httpClient.put<string>("api/userProfile/updateUserProfile/" + user_id, userProfile);

  }
}

export interface userProfileDTO {
  id: number;
  currentWeight: number;
  goalWeight: number;
  lifestyle: string;
  height: number;
  currentCalories: number;
  goalCalories: number;
  sex: string;
  user: string;
}
