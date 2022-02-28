import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../interfaces/Food";
import {FooddiaryService} from "../services/fooddiary.service";
import {UserService} from "../services/user.services";

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.scss']
})
export class AddfoodComponent implements OnInit {

  @Input() selectedFood: Food | undefined;
  servings:boolean = false;
  error: string = "";
  success: string = "";
  constructor(public foodDiaryService: FooddiaryService) { }

  ngOnInit(): void {
  }

  validateValues(meal: string, noOfServings: number) {
    if(meal.length > 0 && noOfServings > 0) {
      this.error = "";
    }
    this.success = "";
  }

  cancelAdd() {
    this.selectedFood = undefined;
    this.error = "";
    this.success = "";
  }

  addFoodToDiary(meal: string, noOfServings: number){
     // @ts-ignore
    let food_id = this.selectedFood.id;
    //Change this to id of user logged in/ session
    let user_id = localStorage.getItem("user_id");

    if((meal == "Breakfast" || meal == "Lunch" || meal == "Dinner" || meal == "Snack") && noOfServings > 0) {
      // @ts-ignore
      this.foodDiaryService.addFood(noOfServings, meal, food_id, user_id);
      this.success = "Food added to diary!"
    } else {
      this.error = "Please enter valid values!";
    }
  }
}
