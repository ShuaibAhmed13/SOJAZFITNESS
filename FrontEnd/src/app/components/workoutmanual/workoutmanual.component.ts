import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../services/exercise.service";
import {Muscle} from "../interfaces/Muscle";
import {MuscleService} from "../services/muscle.service";

@Component({
  selector: 'app-workoutmanual',
  templateUrl: './workoutmanual.component.html',
  styleUrls: ['./workoutmanual.component.scss']
})
export class WorkoutmanualComponent implements OnInit {
  isDarkTheme: boolean = false;
  panelOpenState = false;
  constructor(public exerciseService: ExerciseService, public muscleService: MuscleService) { }

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
    this.getExercises();
    this.getMuscles();
  }

  getExercises(){
    return this.exerciseService.getExercises();
  }
  getMuscles(){
    return this.muscleService.getTheMuscles();
  }


  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    /*    toggleSwitcher = localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");*/
  }
}
