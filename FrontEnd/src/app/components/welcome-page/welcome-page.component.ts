import { Component, OnInit } from '@angular/core';
import {toggleSwitcher} from "../user-profile/user-profile.component";
import {themeColor} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  isDarkTheme: boolean = false;
  themeColor = themeColor;
  toggleSwitcher = toggleSwitcher;
  constructor() { }

  ngOnInit(): void {

    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    /*    toggleSwitcher = localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");*/
  }
}
