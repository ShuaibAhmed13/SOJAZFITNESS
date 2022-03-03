import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Muscle} from "../interfaces/Muscle";

@Injectable({
  providedIn: 'root'
})
export class MuscleService {
  muscles = <Muscle[]>[];
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getFilteredData(muscle: String) {
    this.httpClient.get<Muscle[]>(`api/achievement/getLockedFilteredAchievements/${muscle}`).subscribe(data => {
      console.log("FILTERDATA = " + data)
      this.muscles = data;
    })
  }
}
