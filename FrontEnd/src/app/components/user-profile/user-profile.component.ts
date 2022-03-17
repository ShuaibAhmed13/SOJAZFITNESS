import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {userDTO, UserService} from "../services/user.services";
import {Router} from "@angular/router";
import {userProfileDTO, userProfileService} from "../services/userProfile.service";
import {Subscription} from "rxjs";
import {userProfile} from "../interfaces/userProfile";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
/*  @Input() profList: string[] = [];
  @Input() listProf: any[] = [];
  @Input() selectProf: 'user' | 'currentweight' | 'goalweight' | 'lifestyle' | 'height' = 'user';*/

/*  users: userProfileDTO[] = [];*/
  subscribe: Subscription | undefined;
  currentUserProfile: userProfileDTO | undefined;
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();

  editProfile(id: string) {
    this.edit.emit(id);
  }

  constructor(private userProfileService: userProfileService, private router: Router) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    let userID = 0;
    if(localStorage.getItem('user_id') != null){
      userID = Number (localStorage.getItem('user_id'));
      console.log("The user id is: " + userID);
    }
     this.userProfileService.getUserProfileByUserId(userID).subscribe(data => {
       this.currentUserProfile = data;
     });
  }
  logout() {
    this.userProfileService.Logout();
    this.router.navigateByUrl("/loginpage");
  }



/*  getallUsersProfile() {
    this.userProfileService.setUserProfile(data => {
      this.users = data;
    })
  }*/



}
