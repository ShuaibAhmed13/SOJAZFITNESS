import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-mode',
  templateUrl: './theme-mode.component.html',
  styleUrls: ['./theme-mode.component.scss']
})
export class ThemeModeComponent implements OnInit {
  isDarkTheme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
