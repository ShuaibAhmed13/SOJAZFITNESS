import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food.service";
import {Food} from "../interfaces/Food";
import {Fooddiary} from "../interfaces/fooddiary";
import {FooddiaryService} from "../services/fooddiary.service";

@Component({
  selector: 'app-fooddiary',
  templateUrl: './fooddiary.component.html',
  styleUrls: ['./fooddiary.component.scss']
})
export class FooddiaryComponent implements OnInit {

  foods: Food[] = [];
  searchValue: String ="";
  selectedFood: Food | undefined;
  foodDiary: Fooddiary[] = [];
  selectedDate: string = "";
  message: string = "";
  successmessage: string ="";
  constructor(public foodService: FoodService, public fooddiaryService: FooddiaryService) { }

  ngOnInit(): void {
    this.setFoods();
    this.getCurrentDate();
    this.getUserFoodDiary();

  }

  changeDate(date: string) {
    this.selectedDate = date;
    this.getUserFoodDiary();
  }

  getCurrentDate() {
    var today = new Date();
    this.selectedDate = today.getFullYear() + "-";
    if(today.getMonth() + 1 < 10) {
      this.selectedDate += "0" + (today.getMonth() + 1) +"-";
    } else {
      this.selectedDate += today.getMonth() + 1 + "-";
    }
    if(today.getDate() < 10) {
      this.selectedDate += "0" + today.getDate();
    } else {
      this.selectedDate += today.getDate();
    }
  }

  getUserFoodDiary() {
    let currentUser = 0;
    if(localStorage.getItem('user_id') !== null) {
      currentUser = Number(localStorage.getItem('user_id'));
    }
    // this.fooddiaryService.getUsersFoodDiary(currentUser).subscribe(data => {
    //   this.foodDiary = data;
    // })
    this.fooddiaryService.getUsersFoodDiaryByDate(currentUser, this.selectedDate).subscribe(data => {
      console.log(data)
      this.foodDiary = data;
    })
  }

  validateSearch() {
    for(let food of this.foods) {
      if(food.foodName == this.searchValue) {
        this.selectedFood = food;
      }
    }
  }

  setFoods() {
    this.foodService.getAllFoods().subscribe(data=> {
      this.foods = data;
    })
  }

  addFood(noOfServings: number, meal: string) {
    if(this.selectedFood === undefined) {
      this.message = "Please select a food"
      return;
    }
    else if(noOfServings <= 0) {
      this.message = "Please enter a valid number of servings"
      return;
    } else {
      let food_id = this.selectedFood.id!;
      let user_id = Number(localStorage.getItem("user_id"))!;

      this.fooddiaryService.addFood(noOfServings, meal, food_id, user_id).subscribe(data => {
        this.successmessage = "Meal Added";
        this.getUserFoodDiary();
      });

    }

  }

  deleteFood(entry_id: any) {
    let entry_id1 = entry_id!;
    this.fooddiaryService.deleteFromFoodDiary(entry_id1).subscribe(data => {
      console.log("Deleted successfully");
      this.getUserFoodDiary();
    }
    );
  }
}