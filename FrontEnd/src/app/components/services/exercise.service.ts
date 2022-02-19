import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Exercise} from "../interfaces/Exercise";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  create(exercise:Exercise) {
    this.httpClient.post<Exercise>('api/exercise/create', exercise).subscribe(() => {
      this.router.navigateByUrl('/exercisepost');
    })
  }

}
