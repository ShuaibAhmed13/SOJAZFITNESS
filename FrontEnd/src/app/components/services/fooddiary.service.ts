import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FooddiaryService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  addFood(noOfServings: number, meal: string, food_id: number, user_id:number) {
    const body = {noOfServings: noOfServings, meal: meal}
    this.httpClient.put('api/userfood/addtofooddiary/' + food_id + "/" + user_id, body).subscribe(data =>
      console.log("Added to database!")
    );
  }
}
