import {Component, Input, OnInit} from '@angular/core';
import { FoodService } from "../services/food.service";
import {Food} from "../interfaces/Food";

@Component({
  selector: 'app-foodwidget',
  templateUrl: './foodwidget.component.html',
  styleUrls: ['./foodwidget.component.scss']
})
export class FoodwidgetComponent implements OnInit {

  constructor(public foodService: FoodService) {
    this.foodService = foodService;
  }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods() {
    return this.foodService.getFoods();
  }

}
