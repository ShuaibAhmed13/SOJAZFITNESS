import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../interfaces/User";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.services";
import {Router} from "@angular/router";
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
  constructor(public forgotPasswordService: ForgotPasswordService, public router: Router) { }

  @Input()userEmail = <User>{}
  @Input() editItem: any;
  @Input() selected: string = "";
  @Output() deselect: EventEmitter<string> = new EventEmitter<string>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Input() listitems: any[] = [];
  ngOnInit(): void {

  }




  resetNewPassword(password: string, token: string){
    this.router.navigateByUrl("/loginpage");
    this.forgotPasswordService.processResetPassword(password, token).subscribe(data =>{
      console.log(data);
    })
  }

 /* checkPasswordMatch(fieldConfirmPassword){

  }*/
}
