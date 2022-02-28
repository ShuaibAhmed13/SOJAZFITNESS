import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  pageOneDisplay(): void {
    this.router.navigateByUrl("/welcomepage")
  }

  pageTwoDisplay(): void {
    this.router.navigateByUrl("/aboutus")
  }

  pageThreeDisplay(): void {
    this.router.navigateByUrl("/workoutmanual")
  }

  pageFourDisplay() {
    this.router.navigateByUrl("/exercisepost")
  }
}
