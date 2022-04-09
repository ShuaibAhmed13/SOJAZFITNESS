import {User} from "./User";
import {Exercise} from "./Exercise";

export interface Exercisediary {
  id?: number;
  time?: string;
  totalCaloriesBurned?: number;
  user: User;
  exercise: Exercise;
}
