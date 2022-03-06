import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workoutmanual',
  templateUrl: './workoutmanual.component.html',
  styleUrls: ['./workoutmanual.component.scss']
})
export class WorkoutmanualComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
