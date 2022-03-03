import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showmenu: boolean = true;
  public innerWidth: any;
  private _event: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._event = event;
    this.innerWidth = window.innerWidth;
    this.autoToggleBurgerMenu()
  }

  constructor() { }

  ngOnInit(): void {
    this.autoToggleBurgerMenu()
  }

  autoToggleBurgerMenu() {
    if(innerWidth > 1000) {
      this.showmenu = true
    } else if (innerWidth <=1000) {
      this.showmenu = false
    }

  }

  toggleBurgerMenu() {
    this.showmenu = !this.showmenu;
  }
}
