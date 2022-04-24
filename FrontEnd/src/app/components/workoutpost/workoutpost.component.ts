import {Component, Input, OnInit} from '@angular/core';
import {ExerciseService} from "../services/exercise.service";
import {ExerciseCardioService} from "../services/exercise-cardio.service";
import {Muscle} from "../interfaces/Muscle";
import {MuscleService} from "../services/muscle.service";
import {Exercise} from "../interfaces/Exercise";

@Component({
  selector: 'app-workoutpost',
  templateUrl: './workoutpost.component.html',
  styleUrls: ['./workoutpost.component.scss']
})
export class WorkoutpostComponent implements OnInit {
  isDarkTheme: boolean = false;
  optionValue: any;

  constructor(public exerciseService: ExerciseService, public exerciseCardioService: ExerciseCardioService, public muscleService: MuscleService) {
  }

  @Input() exercises = <Exercise>{};
  ngOnInit(): void {
    this.getExercises();
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  workout(workoutData: any) {
    this.exerciseService.create({name: workoutData.value.name, description:workoutData.value.description, type:workoutData.value.type});
  }

  filterMuscles(filterData: any) {
    this.exerciseService.getFilteredData(filterData.value.filterName);
  }

  getExercises() {
    return this.exerciseService.getExercises();
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    /*    toggleSwitcher = localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");*/
  }
}
