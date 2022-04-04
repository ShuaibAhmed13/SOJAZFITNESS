import {Component, Input, OnInit} from '@angular/core';
import {User} from "../interfaces/User";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.services";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {
  inputData: string[] = [];
  users = <User[]> [];
  error: string = "";
  constructor(private httpClient: HttpClient,public userService: UserService) { }

  @Input()userEmail = <User>{}
  @Input() editItem: any;
  @Input() selected: string = "";
  ngOnInit(): void {
    this.getEmail()
  }


  filterUserEmail(filterData: any) {
    this.userService.confirmEmail(filterData.value.filterName)
  }

  getEmail(){
    return this.userService.getAllEmail()
  }

  updatePassword(inputData: any){
    if(!inputData.valid){
      console.error("Please enter new password.");
      return
    }
    if(this.selected === 'editpassword' && this.editItem){
      this.userService.updatePassword(this.editItem.id, {password: inputData.value.password}).subscribe(data => {
      }, message => {
        console.log(message.error.text);
      })
    }
  }
}
