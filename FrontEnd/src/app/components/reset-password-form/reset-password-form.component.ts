import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../interfaces/User";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.services";
import {ActivatedRoute, Router} from "@angular/router";
import {ForgotPasswordService} from "../services/forgot-password.service";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {
  inputData: string[] = [];
  users = <User[]> [];
  error: string = "";
  chooseModel: string = "";
  token: string="";
  constructor(public forgotPasswordService: ForgotPasswordService, public router: Router, public route: ActivatedRoute) {
    // @ts-ignore
    this.token = this.route.snapshot.paramMap.get('token');
  }

  @Input()userEmail = <User>{}
  @Input() editItem: any;
  @Input() selected: string = "";
  @Output() deselect: EventEmitter<string> = new EventEmitter<string>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Input() listitems: any[] = [];
  ngOnInit(): void {

  }




  resetNewPassword(password: string, confirmpassword: string, token: string){
    if(password != confirmpassword) {
      this.error = "The passwords do not match.";
      return;
    }
    if(token.length == 0) {
      this.error = "Please enter a valid token."
      return;
    }
    // this.router.navigateByUrl("/loginpage");
    this.forgotPasswordService.processResetPassword(token, password).subscribe(data =>{
      console.log(data);

    })
    this.router.navigateByUrl('/loginpage');

  }

 /* checkPasswordMatch(fieldConfirmPassword){

  }*/
}
