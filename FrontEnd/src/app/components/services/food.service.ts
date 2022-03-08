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

  getFoodById(food_id: number): Observable<Food> {
    return this.httpClient.get<Food>('api/food/getfoodbyid/' + food_id);
  }

  createFood(food: Food): Observable<string> {
    return this.httpClient.post<string>('api/food/crud/createfood', food);
  }

  updateFood(food_id: number, food: Food): Observable<string> {
    return this.httpClient.put<string>('api/food/crud/updatefood/' + food_id, food);
  }

  deleteFood(food_id: number): Observable<string> {
    return this.httpClient.delete<string>('api/food/crud/deletefood/' + food_id);
  }
}
