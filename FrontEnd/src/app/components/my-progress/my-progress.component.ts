import { Component, OnInit } from '@angular/core';
import {themeColor} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.scss']
})
export class MyProgressComponent implements OnInit {
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
