import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../services/exercise.service";

@Component({
  selector: 'app-workoutpost',
  templateUrl: './workoutpost.component.html',
  styleUrls: ['./workoutpost.component.scss']
})
export class WorkoutpostComponent implements OnInit {

  constructor(public exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
  }

  workout(workoutData: any) {
    this.exerciseService.create({workout: workoutData.value.workout, workoutType: workoutData.value.workoutType, sets: workoutData.value.sets, reps: workoutData.value.sets, intensity: workoutData.value.intensity});
  }
}
