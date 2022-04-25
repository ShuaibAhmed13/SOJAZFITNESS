import {Component, Input, OnInit} from '@angular/core';
import {ExerciseService} from "../services/exercise.service";
import {Exercise} from "../interfaces/Exercise";
import {themeColor} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-workoutequipment',
  templateUrl: './workoutequipment.component.html',
  styleUrls: ['./workoutequipment.component.scss']
})
export class WorkoutequipmentComponent implements OnInit {
  themeColor = themeColor;
  optionValue: any;

  constructor(public exerciseService: ExerciseService) {

  }

  @Input() exercises = <Exercise>{};
  ngOnInit(): void {
    this.getExercises();
  }
  getExercises() {
    return this.exerciseService.getExercises();
  }

  filterEquipment(filterData: any) {
    this.exerciseService.getFilteredEquipment(filterData.value.filterName)

  }
}
