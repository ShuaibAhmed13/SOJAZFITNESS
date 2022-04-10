import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Fooddiary} from "../interfaces/fooddiary";

@Injectable({
  providedIn: 'root'
})
export class FooddiaryService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  addFood(noOfServings: number, meal: string, food_id: number, user_id:number): Observable<string> {
    const body = {noOfServings: noOfServings, meal: meal}
    return this.httpClient.post<string>('api/userfood/addtofooddiary/' + food_id + "/" + user_id, body);
  }

  getUsersFoodDiary(user_id: number): Observable<Fooddiary[]> {
    return this.httpClient.get<Fooddiary[]>('api/userfood/getusersfoods/' + user_id);
  }

  getUsersFoodDiaryByDate(user_id: number, date: string): Observable<Fooddiary[]> {
    let url = "api/userfood/getusersfoodsbydate/" + user_id + "/" + date;
    return this.httpClient.get<Fooddiary[]>(url);
  }

  getPastWeekCalories(user_id: number): Observable<caloriesPerDate[]> {
    let url = "api/userfood/getpastweekcalories/" + user_id;
    return this.httpClient.get<caloriesPerDate[]>(url);
  }

  deleteFromFoodDiary(entry_id: number) {
    return this.httpClient.delete('api/userfood/deletefromfooddiary/' + entry_id);
  }

  getUsersCaloriesForTheDay(user_id: number, date: string): dailyConsumption {
    let entries: Fooddiary[];
    let consumption: dailyConsumption = {totalCalories: 0, totalCarbs: 0, totalProteins: 0, totalFats: 0}

    this.getUsersFoodDiaryByDate(user_id, date).subscribe(data => {
      entries = data;
      for (let entry of entries) {
        consumption.totalCalories += Number(entry.caloriesConsumed);
        consumption.totalCarbs += Number(entry.carbsConsumed);
        consumption.totalProteins += Number(entry.proteinConsumed);
        consumption.totalFats += Number(entry.fatsConsumed);
      }
    })
    return consumption;
  }

}

export interface dailyConsumption {
  totalCalories: number;
  totalCarbs: number;
  totalProteins: number;
  totalFats: number;
}

export interface caloriesPerDate {
  date: number;
  caloriesConsumed: number;
  carbsConsumed: number;
  proteinConsumed: number;
  fatsConsumed: number;
}
