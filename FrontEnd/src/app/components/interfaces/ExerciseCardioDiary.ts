import {Time} from "@angular/common";

export interface ExerciseCardioDiary {
  id?: number;
  time?: Time;
  distance?: number;
  intensity?: string;
  userID?: number;
  workoutID: number;
}
