import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  public processForgotPassword(email: string){
    console.log(email);
    this.router.navigateByUrl("/resetpasswordform")
    let params = new HttpParams().set('email', email);
      return this.httpClient.post<string>("api/resetpassword/forgot_password?email=" + email, {params: params});
  }

  public processResetPassword(token: string, password: string){

    return this.httpClient.post<string>("api/resetpassword/reset_password?token=" + token + "&password=" + password, token);
  }
}
