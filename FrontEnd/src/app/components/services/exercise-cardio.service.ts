import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ExerciseCardio} from "../interfaces/ExerciseCardio";

@Injectable({
  providedIn: 'root'
})
export class ExerciseCardioService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  createCardio(exerciseCardio:ExerciseCardio) {
    this.httpClient.post<ExerciseCardio>('api/exercisecardio/createcardio', exerciseCardio).subscribe(() => {
      this.router.navigateByUrl('/exercisepost');
    })
  }

}
