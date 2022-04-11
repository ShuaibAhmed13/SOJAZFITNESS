import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Fooddiary} from "../interfaces/fooddiary";
import {Exercisediary} from "../interfaces/Exercisediary";

@Injectable({
  providedIn: 'root'
})
export class ExercisediaryService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  addCardioExercise(timeOfDay: string, noOfMinutes: number, exerciseId: number, userId:number): Observable<string> {
    const body = {timeOfDay: timeOfDay, noOfMinutes: noOfMinutes}
    return this.httpClient.post<string>('api/userexercise/addtocardioexercisediary/' + exerciseId + "/" + userId, body);
  }

  addWeightExercise(timeOfDay: string, sets: number, reps: number, exerciseId: number, userId:number): Observable<string> {
    const body = {timeOfDay: timeOfDay, sets: sets, reps: reps}
    return this.httpClient.post<string>('api/userexercise/addtoweightexercisediary/' + exerciseId + "/" + userId, body);
  }

  getUsersExerciseDiary(userId: number): Observable<Exercisediary[]> {
    return this.httpClient.get<Exercisediary[]>('api/userexercise/getusersexercises/' + userId);
  }

  deleteFromExerciseDiary(entryId: number) {
    return this.httpClient.delete('api/userexercise/deleteuserexercise/' + entryId);
  }
}
