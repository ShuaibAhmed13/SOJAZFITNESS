import {Router} from "@angular/router";
import {Exercise} from "../interfaces/Exercise";
import {ExerciseWeight} from "../interfaces/ExerciseWeight";
import {Observable} from "rxjs";
import {Food} from "../interfaces/Food";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises: any;
  private exerciseWeights: ExerciseWeight[] | undefined;

  constructor(private httpClient: HttpClient, private router: Router) { }


  getExercises() {
    this.httpClient.get<Exercise[]>('api/exercise/getExercises').subscribe(data => {
      console.log(data);
      this.exercises = data;
    })
  }

  getWeightExercises() {
    this.httpClient.get<ExerciseWeight[]>('api/exercise/getWeightExercises').subscribe(data => {
      console.log(data);
      this.exerciseWeights = data;
    })
  }

  getAllExercises(): Observable<Exercise[]> {
    return this.httpClient.get<Exercise[]>('api/exercise/getExercises');
  }

  getAllWeightExercises(): Observable<ExerciseWeight[]> {
    return this.httpClient.get<ExerciseWeight[]>('api/exercise/getWeightExercises');
  }

}
