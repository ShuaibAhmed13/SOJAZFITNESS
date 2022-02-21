import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../services/exercise.service";
import {ExerciseCardioService} from "../services/exercise-cardio.service";

@Component({
  selector: 'app-workoutpost',
  templateUrl: './workoutpost.component.html',
  styleUrls: ['./workoutpost.component.scss']
})
export class WorkoutpostComponent implements OnInit {

  optionValue: any;

  constructor(public exerciseService: ExerciseService, public exerciseCardioService: ExerciseCardioService) {
  }

  ngOnInit(): void {
  }

  workout(workoutData: any) {
    this.exerciseService.create({workout: workoutData.value.workout, sets: workoutData.value.sets, reps: workoutData.value.reps, intensity: workoutData.value.intensity});
  }

  workoutCardio(workoutCardioData: any) {
    this.exerciseCardioService.createCardio({workoutCardio: workoutCardioData.value.workoutCardio, length: workoutCardioData.value.length, intensity: workoutCardioData.value.intensityCardio});
  }


}
