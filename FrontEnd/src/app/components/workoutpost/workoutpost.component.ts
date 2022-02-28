import {Component, Input, OnInit} from '@angular/core';
import {ExerciseService} from "../services/exercise.service";
import {ExerciseCardioService} from "../services/exercise-cardio.service";
import {Muscle} from "../interfaces/Muscle";
import {MuscleService} from "../services/muscle.service";

@Component({
  selector: 'app-workoutpost',
  templateUrl: './workoutpost.component.html',
  styleUrls: ['./workoutpost.component.scss']
})
export class WorkoutpostComponent implements OnInit {

  optionValue: any;

  constructor(public exerciseService: ExerciseService, public exerciseCardioService: ExerciseCardioService, public muscleService: MuscleService) {
  }

  @Input() muscle = <Muscle>{};
  ngOnInit(): void {
  }

  workout(workoutData: any) {
    this.exerciseService.create({name: workoutData.value.name, description:workoutData.value.description, reps: workoutData.value.reps, sets: workoutData.value.sets });
  }

  workoutCardio(workoutCardioData: any) {
    this.exerciseCardioService.createCardio({workoutCardio: workoutCardioData.value.workoutCardio, length: workoutCardioData.value.length, intensity: workoutCardioData.value.intensityCardio});
  }

  filterMuscles(filterData: any) {
    this.muscleService.getFilteredData(filterData.value.filterName);
  }


}
