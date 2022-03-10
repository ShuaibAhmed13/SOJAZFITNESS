import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Exercise} from "../interfaces/Exercise";
import {ExerciseWeight} from "../interfaces/ExerciseWeight";
import {Observable} from "rxjs";
import {Food} from "../interfaces/Food";
import {Muscle} from "../interfaces/Muscle";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  exercises = <Exercise[]>[];

  create(exercise: Exercise) {
    this.httpClient.post<Exercise>('api/exercise/create', exercise).subscribe(() => {
      this.router.navigateByUrl('/exercisepost');
    })

  }

  getExercises() {
    this.httpClient.get<Exercise[]>('api/exercises/findall').subscribe(data => {
      console.log(data);
      this.exercises = data;
    })
  }

  getFilteredData(muscleName: String) {
    this.httpClient.get<Exercise[]>(`api/muscle/getMuscles/${muscleName}`).subscribe(data => {
      console.log("FILTERDATA = " + data)
      this.exercises = data;
    })
  }


  getAllExercises(): Observable<Exercise[]> {
    return this.httpClient.get<Exercise[]>('api/exercises/getExercises');
  }

}
