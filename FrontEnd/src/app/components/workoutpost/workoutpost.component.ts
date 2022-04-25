import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import {ExerciseService} from "../services/exercise.service";
import {ExerciseCardioService} from "../services/exercise-cardio.service";
import {Muscle} from "../interfaces/Muscle";
import {MuscleService} from "../services/muscle.service";
import {Exercise} from "../interfaces/Exercise";
import {ExerciseCardio} from "../interfaces/ExerciseCardio";
import {ExercisediaryService} from "../services/exercisediary.service";
import {Food} from "../interfaces/Food";
import {Fooddiary} from "../interfaces/fooddiary";
import {Exercisediary} from "../interfaces/Exercisediary";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {themeColor} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-workoutpost',
  templateUrl: './workoutpost.component.html',
  styleUrls: ['./workoutpost.component.scss']
})
export class WorkoutpostComponent implements OnInit, AfterContentChecked {
  isDarkTheme: boolean = false;
  themeColor = themeColor;

  optionValue: any;
  exercises: Exercise[] = [];
  searchValue: String ="";
  selectedExercise: Exercise | undefined;
  exerciseDiary: Exercisediary[] = [];
  message: string = "";
  successmessage: string ="";

  constructor(public exerciseService: ExerciseService, public exerciseCardioService: ExerciseCardioService, public muscleService: MuscleService, public exerciseDiaryService: ExercisediaryService, private toastr: ToastrService, private route: ActivatedRoute) {
    // @ts-ignore
    this.searchValue = this.route.snapshot.paramMap.get('selectedExercise');
  }

  @Input() exerciseFilter = <Exercise>{};

  ngOnInit(): void {
    this.getExercises();
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
    this.setExercises();
    this.getUserExerciseDiary();
  }

  ngAfterContentChecked() {
    this.validateSearch();
  }

  getUserExerciseDiary() {
    let currentUser = 0;
    if(localStorage.getItem('user_id') !== null) {
      currentUser = Number(localStorage.getItem('user_id'));
    }
    this.exerciseDiaryService.getUsersExerciseDiary(currentUser).subscribe(data => {
      console.log(data)
      this.exerciseDiary = data;
    })
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
  validateSearch() {
    for(let exercise of this.exercises) {
      if(exercise.name == this.searchValue) {
        this.selectedExercise = exercise;
      }
    }
  }

  setExercises() {
    this.exerciseService.getAllExercises().subscribe(data=> {
      this.exercises = data;
    })
  }

  addCardioExercise(noOfMinutes: number, timeOfDay: string) {
    if (this.selectedExercise === undefined) {
      this.message = "Please select an exercise"
      return;
    } else if (noOfMinutes <= 0) {
      this.message = "Please enter a valid number of minutes"
      return;
    } else {
      let exerciseId = this.selectedExercise.id!;
      let userId = Number(localStorage.getItem("user_id"))!;

      this.exerciseDiaryService.addCardioExercise(timeOfDay, noOfMinutes, exerciseId, userId).subscribe(data => {
        this.toastr.success("Exercise Added!")
      });
    }
  }

  addWeightExercise(sets: number, reps: number, timeOfDay: string) {
    if (this.selectedExercise === undefined) {
      this.message = "Please select an exercise"
      return;
    } else if (sets <= 0) {
      this.message = "Please enter a valid number of sets"
      return;
    } else if (reps <= 0) {
      this.message = "Please enter a valid number of reps"
      return;
    } else {
      let exerciseId = this.selectedExercise.id!;
      let userId = Number(localStorage.getItem("user_id"))!;

      this.exerciseDiaryService.addWeightExercise(timeOfDay, reps, sets, exerciseId, userId).subscribe(data => {
        this.toastr.success("Exercise Added!")
      });
    }
  }

  deleteExercise(entry_id: any) {
    let entry_id1 = entry_id!;
    this.exerciseDiaryService.deleteFromExerciseDiary(entry_id1).subscribe(data => {
        console.log("Deleted successfully");
        this.toastr.success("Exercise Deleted!")
        this.getUserExerciseDiary();
      }
    );
  }
}
