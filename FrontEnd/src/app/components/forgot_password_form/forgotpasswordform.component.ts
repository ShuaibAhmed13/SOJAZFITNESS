import { Component, OnInit } from '@angular/core';
import {ForgotPasswordService} from "../services/forgot-password.service";

@Component({
  selector: 'app-forgotpasswordform',
  templateUrl: './forgotpasswordform.component.html',
  styleUrls: ['./forgotpasswordform.component.scss']
})
export class ForgotpasswordformComponent implements OnInit {

  constructor(public forgotPasswordService: ForgotPasswordService) { }

  ngOnInit(): void {
  }

  sendEmail(email: string){
    this.forgotPasswordService.processForgotPassword(email).subscribe(data =>{
      console.log(data);
    });
  }

}
