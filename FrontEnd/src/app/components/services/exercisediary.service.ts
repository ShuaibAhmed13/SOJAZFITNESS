import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Fooddiary} from "../interfaces/fooddiary";

@Injectable({
  providedIn: 'root'
})
export class ExercisediaryService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  addExercise(time: string, exerciseId: number, userId:number): Observable<string> {
    const body = {time: time}
    return this.httpClient.post<string>('api/userexercise/addtoexercisediary/' + exerciseId + "/" + userId, body);
  }

}
