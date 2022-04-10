import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class forgotpasswordService {
  error = "";
  currentUsername = "";
  message = "";


  constructor(private httpClient: HttpClient, private router: Router) {}

  isUserLoggedIn() {
    return !!localStorage.getItem("username");
  }


}

export interface userDTO {

}
