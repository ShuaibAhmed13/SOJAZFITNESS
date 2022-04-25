import { Component, OnInit } from '@angular/core';
import {themeColor} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  isDarkTheme: boolean = false;
  themeColor = themeColor;

  constructor() { }

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    /*    toggleSwitcher = localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");*/
  }
}
