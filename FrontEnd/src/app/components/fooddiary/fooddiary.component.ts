import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food.service";
import {Food} from "../interfaces/Food";
import {Fooddiary} from "../interfaces/fooddiary";
import {dailyConsumption, FooddiaryService} from "../services/fooddiary.service";
import {ToastrService} from "ngx-toastr";
import {themeColor} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-fooddiary',
  templateUrl: './fooddiary.component.html',
  styleUrls: ['./fooddiary.component.scss']
})
export class FooddiaryComponent implements OnInit {
  themeColor = themeColor;
  isDarkTheme: boolean = false;



  foods: Food[] = [];
  searchValue: String ="";
  selectedFood: Food | undefined;
  foodDiary: Fooddiary[] = [];
  selectedDate: string = "";
  message: string = "";
  successmessage: string ="";
  dayConsumption: dailyConsumption = {totalCalories: 0, totalCarbs: 0, totalProteins: 0, totalFats: 0}

  constructor(public foodService: FoodService, public fooddiaryService: FooddiaryService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.setFoods();
    this.getCurrentDate();
    this.getUserFoodDiary();
    this.getDailyConsumption();
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;

  }

  changeDate(date: string) {
    this.selectedDate = date;
    this.getUserFoodDiary();
    this.getDailyConsumption();
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
        this.toastr.success("Meal Added!")
        this.getUserFoodDiary();
        this.getDailyConsumption();
      });

    }

  }

  deleteFood(entry_id: any) {
    let entry_id1 = entry_id!;
    this.fooddiaryService.deleteFromFoodDiary(entry_id1).subscribe(data => {
      console.log("Deleted successfully");
      this.toastr.success("Meal Deleted!")
      this.getUserFoodDiary();
      this.getDailyConsumption();
    }
    );
  }

  getDailyConsumption() {
    this.dayConsumption = this.fooddiaryService.getUsersCaloriesForTheDay(Number(localStorage.getItem("user_id")), this.selectedDate);
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    /*    toggleSwitcher = localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");*/
  }
}
