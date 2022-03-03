import { Component, OnInit } from '@angular/core';
import {userDTO, UserService} from "../services/user.services";
import {User} from "../interfaces/User";
import {Observable, TimeInterval} from "rxjs";

@Component({
  selector: 'app-adminpanelpage',
  templateUrl: './adminpanelpage.component.html',
  styleUrls: ['./adminpanelpage.component.scss']
})
export class AdminpanelpageComponent implements OnInit {

  users: userDTO[] = [];
  interval: number = 0

  constructor(public userService: UserService) { }


  ngOnInit(): void {
    this.getUsers();
    this.interval = setInterval(() => {
      this.getUsers()
      console.log("interval");
    },5000)
  }

  ngOnDestroy() {

    clearInterval(this.interval);

  }

  suspendUser(user_id: number) {
    this.userService.suspendUser(user_id).subscribe();
    this.ngOnInit();
  }
  reactivateUser(user_id:number) {
    this.userService.reactivateUser(user_id).subscribe();
    this.ngOnInit();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  deleteUser(user_id: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(user_id).subscribe(data => {
          console.log(data);
        },
        error => {
          console.log(error.error.text);
          this.ngOnInit();
        }
      );
    } else {
      return;
    }
  }
}
