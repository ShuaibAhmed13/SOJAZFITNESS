import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import {ExerciseService} from "../services/exercise.service";
import {Muscle} from "../interfaces/Muscle";
import {MuscleService} from "../services/muscle.service";
import {timer} from "rxjs";
import {Exercise} from "../interfaces/Exercise";
import {ChangeDetectorRef} from "@angular/core";
import {Router} from "@angular/router";
import {themeColor} from "../user-profile/user-profile.component";

declare function imageMapResize(): void;

@Component({
  selector: 'app-workoutmanual',
  templateUrl: './workoutmanual.component.html',
  styleUrls: ['./workoutmanual.component.scss'],
})
export class WorkoutmanualComponent implements OnInit, AfterViewInit {
  themeColor = themeColor;
  isDarkTheme: boolean = false;
  panelOpenState = false;
  muscles: Muscle[] = [];
  groups: string[] = ["Arms", "Back", "Core", "Chest", "Hips", "Legs", "Shoulders"];
  groupsMap: Map<string, Muscle[]> = new Map<string, Muscle[]>();
  currentMuscle: Muscle | undefined;
  exercises: Exercise[] = [];
  selectedGroup: any;

  constructor(public exerciseService: ExerciseService, public muscleService: MuscleService, private cdRef: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;

    this.getAllMuscles();
    // @ts-ignore
    // this.populateMap(this.muscles);

  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  getAllMuscles() {
    this.muscleService.getAllMuscle().subscribe(data => {
      // console.log(data);
      this.muscles = data;
      this.populateMap(data);
    })
  }

  populateMap(muscles: Muscle[]) {

    for (let muscle of muscles) {
      if (muscle.muscleGroup != null && this.groupsMap.has(muscle.muscleGroup)) {
        let all = this.groupsMap.get(muscle.muscleGroup);
        // @ts-ignore
        all.push(muscle);
        // @ts-ignore
        this.groupsMap.set(muscle.muscleGroup, all);

      } else if (muscle.muscleGroup != null) {
        this.groupsMap.set(muscle.muscleGroup, [muscle]);
      }
    }

    for (let key of this.groupsMap.keys()) {
      console.log(key)
      // @ts-ignore
      for (let val of this.groupsMap.get(key).values()) {
        console.log(val);
      }
    }
  }

  setMuscle(muscle: Muscle) {
    this.currentMuscle = muscle;
    // @ts-ignore
    this.exerciseService.getExerciseByMuscle(muscle.muscleName).subscribe(data => {
      this.exercises = data;
    }, error => console.log(error))
  }

  goToPost(exercise: Exercise) {
    // @ts-ignore
    console.log(typeof exercise)
    this.router.navigate(['exercisepost', {selectedExercise: exercise.name}]);
  }

  imageResized() {
    imageMapResize();
  }


  selectGroup(group: string) {
    if (this.selectedGroup == group) {
      this.selectedGroup = null;
    } else {
      this.selectedGroup = group;
    }
  }

   storeThemeSelection() {
     localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
     /*toggleSwitcher = localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");*/
   }

}
