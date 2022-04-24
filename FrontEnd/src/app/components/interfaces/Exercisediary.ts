import {User} from "./User";
import {Exercise} from "./Exercise";

export interface Exercisediary {
  id?: number;
  timeOfDay?: string;
  sets?: number;
  reps?: number;
  totalCaloriesBurned?: number;
  user: User;
  exercise: Exercise;
}
