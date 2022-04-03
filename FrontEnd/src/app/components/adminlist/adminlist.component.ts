import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {userDTO, UserService} from "../services/user.services";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent implements OnInit {

  //**Delete this probs
  //Trying to make this a reusable list component that resides within the admin control panel
  // userss: userDTO[] = [];
  // interval: number = 0
  // subscribe: Subscription | undefined;
  //**


  @Input() searchInput: string = "";
  @Input() listitems: any[] = [];
  @Input() thlist: string[] = [];
  @Input() selected: 'user' | 'food' | 'equipment' | 'muscles' | 'exercises' | 'video' = 'user';
  @Input() muscle: any[] = [];
  @Input() exercise: any[] = [];
  @Input() video: any[] = [];

  //button outputs
  @Output() suspend: EventEmitter<number> = new EventEmitter<number>();
  @Output() reactivate: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();


  suspendEmit(id: number) {
    this.suspend.emit(id);
  }
  reactivateEmit(id: number) {
    this.reactivate.emit(id);
  }
  editEmit(id: number) {
    this.edit.emit(id);
  }
  deleteEmit(id: number) {
    this.delete.emit(id);
  }

  constructor(public userService: UserService) { }
  ngOnInit(): void {



    // this.getUsers();
    // this.interval = setInterval(() => {
    //   this.getUsers()
    //   // console.log("interval");
    // },5000)

  }



  // ngOnDestroy() {
  //   clearInterval(this.interval);
  //   // @ts-ignore
  //   this.subscribe.unsubscribe();
  // }
  //
  // suspendUser(user_id: number) {
  //   this.userService.suspendUser(user_id).subscribe();
  //   this.ngOnInit();
  // }
  // reactivateUser(user_id:number) {
  //   this.userService.reactivateUser(user_id).subscribe();
  //   this.ngOnInit();
  // }
  //
  // getUsers() {
  //
  //   this.subscribe = this.userService.getAllUsers().subscribe(data => {
  //     this.users = data;
  //   })
  //
  // }
  //
  // deleteUser(user_id: number) {
  //   if (confirm("Are you sure you want to delete this user?")) {
  //     this.userService.deleteUser(user_id).subscribe(data => {
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error.error.text);
  //         this.ngOnInit();
  //       }
  //     );
  //   } else {
  //     return;
  //   }
  // }

}
