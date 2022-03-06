import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Muscle} from "../interfaces/Muscle";

@Injectable({
  providedIn: 'root'
})
export class MuscleService {
  muscle = <Muscle[]>[];
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getMuscles() {
    this.httpClient.get<Muscle[]>('api/muscle/getMuscles').subscribe(data => {
      console.log(data);
      this.muscle = data;
    })
  }

  getFilteredData(muscle: String) {
    this.httpClient.get<Muscle[]>(`api/muscle/getMuscles/${muscle}`).subscribe(data => {
      console.log("FILTERDATA = " + data)
      this.muscle = data;
    })
  }
}
