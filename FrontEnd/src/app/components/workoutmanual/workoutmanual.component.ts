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
  panelOpenState = false;
  constructor(public exerciseService: ExerciseService, public muscleService: MuscleService) { }

  ngOnInit(): void {
    this.getExercises();
    this.getMuscles();
  }

  getExercises(){
    return this.exerciseService.getExercises();
  }
  getMuscles(){
    return this.muscleService.getTheMuscles();
  }


}
