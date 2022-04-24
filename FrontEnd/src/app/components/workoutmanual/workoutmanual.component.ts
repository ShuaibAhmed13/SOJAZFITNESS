import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workoutmanual',
  templateUrl: './workoutmanual.component.html',
  styleUrls: ['./workoutmanual.component.scss']
})
export class WorkoutmanualComponent implements OnInit {
  isDarkTheme: boolean = false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    /*    toggleSwitcher = localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");*/
  }
}
