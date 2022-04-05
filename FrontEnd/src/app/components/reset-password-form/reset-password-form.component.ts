import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../interfaces/User";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../services/user.services";
import {Router} from "@angular/router";

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
  constructor(private httpClient: HttpClient, public userService: UserService, public router: Router) { }

  @Input()userEmail = <User>{}
  @Input() editItem: any;
  @Input() selected: string = "";
  @Output() deselect: EventEmitter<string> = new EventEmitter<string>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Input() listitems: any[] = [];
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
      /*console.error("Please enter new password.");*/
      this.error = "no password is shown";
      return
    }
    this.deselect.emit('');
    if(this.selected === 'editpassword' && this.editItem){
      this.userService.updatePassword(this.editItem.id, {password: inputData.value.password, emailToken: inputData.value.type}).subscribe(data => {
      }, message => {
        console.log(message.error.text);
      })
    }
  }

  changePassword(userId: number){
    this.chooseModel = 'editpassword';
    let user = this.users.find(x => x.id === userId);
    this.editItem = user;
  }

  showModal(option: string){
    this.chooseModel = option;
  }

  editEmit(id: number){
    this.edit.emit(id);
  }

  pageOneDisplay(): void {
    this.router.navigateByUrl("/userprofile")
    console.log("Password successfully changed!")
  }
}
