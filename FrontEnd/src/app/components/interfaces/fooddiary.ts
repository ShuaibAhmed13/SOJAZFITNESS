import {userDTO} from "../services/user.services";
import {Food} from "./Food";
import {User} from "./User";

export interface Fooddiary {
  id?: number;
  caloriesConsumed?: number;
  carbsConsumed?: number;
  date?: number;
  fatsConsumed?: number;
  meal?: string;
  noOfServings?: number;
  proteinConsumed?: number;
  sodiumConsumed?: number;
  sugarConsumed?: number;
  user: User;
  food: Food;
}
