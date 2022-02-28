import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Exercise} from "../interfaces/Exercise";
import {ExerciseWeight} from "../interfaces/ExerciseWeight";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  create(exercise: Exercise, exerciseWeight: ExerciseWeight) {
    this.httpClient.post<Exercise>('api/exercise/create', exercise).subscribe(() => {
      this.router.navigateByUrl('/exercisepost');
    })
  }

}
