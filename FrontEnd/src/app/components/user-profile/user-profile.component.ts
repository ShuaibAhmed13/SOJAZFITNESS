import {Component, EventEmitter, HostBinding, Input, OnInit, Output,} from '@angular/core';
import {userDTO, UserService} from "../services/user.services";
import {Router} from "@angular/router";
import {userProfileDTO, userProfileService} from "../services/userProfile.service";
import {Subscription} from "rxjs";
import {userProfile} from "../interfaces/userProfile";
import {FormControl} from "@angular/forms";
import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

export let toggleSwitcher = localStorage.getItem('toggleControl');
export let themeColor = localStorage.getItem('theme-color');


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  title = 'angular-multiple-theme-switcher';
  // @ts-ignore
  storedTheme: string = localStorage.getItem('theme-color');

  isDarkTheme: boolean = false;

  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  userProfile: userProfile[] = [];
  chooseModal: string = "";
  @Input() listitems: any[] = [];


/*  @Input() profList: string[] = [];
  @Input() listProf: any[] = [];
  @Input() selectProf: 'user' | 'currentweight' | 'goalweight' | 'lifestyle' | 'height' = 'user';*/

/*  users: userProfileDTO[] = [];*/
  subscribe: Subscription | undefined;
  currentUserProfile: userProfileDTO | undefined;
  currentUserName: string = '';
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  inputData: string[] = [];
  @Input() editProf: any;
  error: string = "";
  @Input() selected: string = "";
  @Output() deselect: EventEmitter<string> = new EventEmitter<string>();
  @Input() editItem: any;

  closeResult = '';

  editProfile(id: string) {
    this.edit.emit(id);
  }

  constructor(private userProfileService: userProfileService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUserProfile();
    this.toggleControl.valueChanges.subscribe(value => {
      this.className = value ? 'darkMode' : '';
      localStorage.getItem('toggleControl');
      console.log(this.className);

    });


    this.getuserName();
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  getUserProfile() {
    let userID = 0;
    if(localStorage.getItem('user_id') != null){
      userID = Number (localStorage.getItem('user_id'));
      console.log("The user id is: " + userID);
    }
     this.userProfileService.getUserProfileByUserId(userID).subscribe(data => {
       console.log(data);
       this.currentUserProfile = data;
     });
  }
  logout() {
    this.userProfileService.Logout();
    this.router.navigateByUrl("/loginpage");
  }

  setTheme(themes: string) {
    localStorage.setItem('theme-color', themes);
    // @ts-ignore
    this.storedTheme = localStorage.getItem('theme-color');
    themeColor = localStorage.getItem('theme-color');
  }

  pageOneDisplay(): void {
    this.router.navigateByUrl("/forgotpasswordform")
  }

  setToggle(themes: string) {
    localStorage.setItem('toggleControl', themes);
    // @ts-ignore
    this.storedTheme = localStorage.getItem('toggleControl');
    toggleSwitcher = localStorage.getItem('toggleControl');
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
/*    toggleSwitcher = localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");*/
  }
/*  getallUsersProfile() {
    this.userProfileService.setUserProfile(data => {
      this.users = data;
    })
  }*/


  getuserName(){
    // @ts-ignore
    this.currentUserName = localStorage.getItem('username');
  }



  editProfilePage(id: number) {
    this.chooseModal = "editProfilePage";
    let profPage = this.userProfile.find(x => x.id === id);
    this.editItem = profPage;
  }

}
