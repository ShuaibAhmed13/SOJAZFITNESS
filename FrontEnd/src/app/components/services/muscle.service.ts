import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Muscle} from "../interfaces/Muscle";
import {Exercise} from "../interfaces/Exercise";
import {Food} from "../interfaces/Food";
import {Observable} from "rxjs";
import {Equipment} from "../interfaces/equipment";

@Injectable({
  providedIn: 'root'
})
export class MuscleService {
  muscle = <Muscle[]>[];
  muscleObject = <Exercise[]>[];

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getAllMuscle():Observable<Muscle[]> {
    return this.httpClient.get<Muscle[]>('api/muscle/findall');
  }

  getMuscles() {
    this.httpClient.get<Exercise[]>('api/muscle/findall').subscribe(data => {
      console.log(data);
      this.muscleObject = data;
    })
  }

  getFilteredData(muscleName: String) {
    this.httpClient.get<Exercise[]>(`api/muscle/getMuscles/${muscleName}`).subscribe(data => {
      console.log("FILTERDATA = " + data)
      this.muscleObject = data;
    })
  }

  // admin stuff
  createMuscle(muscle: Muscle): Observable<string> {
    return this.httpClient.post<string>('api/muscle/crud/createmuscle', muscle);
  }

  updateMuscle(muscleId: number, muscle: Muscle): Observable<string> {
    return this.httpClient.put<string>('api/muscle/crud/updatemuscle/' + muscleId, muscle);
  }

  deleteMuscle(muscleId: number): Observable<string> {
    return this.httpClient.delete<string>('api/muscle/crud/deletemuscle/' + muscleId);
  }
}
