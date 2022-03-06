import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Food} from "../interfaces/Food";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private httpClient: HttpClient, private router: Router) { }
  foods = <Food[]>[];

  getFoods() {
    this.httpClient.get<Food[]>('api/food/getFoods').subscribe(data => {
      console.log(data);
      this.foods = data;
    })
  }

  getAllFoods(): Observable<Food[]> {
    return this.httpClient.get<Food[]>('api/food/getFoods');
  }
}
