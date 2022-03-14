import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Muscle} from "../interfaces/Muscle";
import {Exercise} from "../interfaces/Exercise";

@Injectable({
  providedIn: 'root'
})
export class MuscleService {
  muscle = <Muscle[]>[];
  muscleObject = <Exercise[]>[];

  constructor(private httpClient: HttpClient, private router: Router) {
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
}
