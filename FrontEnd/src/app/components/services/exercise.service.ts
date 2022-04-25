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
    this.httpClient.post<Exercise>('api/exercises/create', exercise).subscribe(() => {
      this.router.navigateByUrl('/exercisepost');
    })

  }

  getExercises() {
    this.httpClient.get<Exercise[]>('api/exercises/getall').subscribe(data => {
      console.log(data);
      this.exercises = data;
    })
  }
  getAllExercises():Observable <Exercise[]> {
    return this.httpClient.get<Exercise[]>('api/exercises/getall');
  }
  getcreateExercises(exercise: Exercise): Observable<string> {
    return this.httpClient.post<string>('api/exercises/crud/createexercise', exercise);
  }
  geteditExercises(exercise_id: number, exercise: Exercise): Observable<string> {
    return this.httpClient.put<string>('api/exercises/crud/updateexercise/' + exercise_id, exercise);
  }
  getdeleteExercises(exercise_id: number): Observable<string> {
    return this.httpClient.delete<string>('api/exercises/crud/deleteexercise/' + exercise_id);
  }

  getFilteredData(muscleName: String) {
    this.httpClient.get<Exercise[]>(`api/muscle/getMuscles/${muscleName}`).subscribe(data => {
      console.log("FILTERDATA = " + data)
      this.exercises = data;
    })
  }

  getExerciseByMuscle(muscleName: String): Observable<Exercise[]> {
    return this.httpClient.get<Exercise[]>(`api/muscle/getMuscles/${muscleName}`);
  }

  getFilteredEquipment(equipmentName:String){
    this.httpClient.get<Exercise[]>(`api/equipment/getequipment/${equipmentName}`).subscribe((data =>{console.log("FILTERDATA = " + data)
      this.exercises = data;
    }))
  }



}
