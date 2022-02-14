import { Component, OnInit } from '@angular/core';
import { FoodService } from "../services/food.service";
import {Food} from "../interfaces/Food";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-foodsearch',
  templateUrl: './foodsearch.component.html',
  styleUrls: ['./foodsearch.component.scss']
})
export class FoodsearchComponent implements OnInit {

  FoodsList: Food[] = [];
  myControl = new FormControl();
  //options: string[] = ['One', 'Two', 'Three'];
  // @ts-ignore
  filteredOptions: Observable<Food[]>;
  selectedFood: Food | undefined;
  private data: any;

  constructor(public foodService: FoodService) { }

  getFoods() {
    this.foodService.getAllFoods().subscribe(data => this.FoodsList = data);
  }

  ngOnInit(): void {
    this.getFoods();
    // @ts-ignore
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.FoodsList.slice())),
    );
  }

  displayFn(food: Food): string {
    return food && food.foodName ? food.foodName : '';
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // @ts-ignore
    return this.FoodsList.filter(foods => foods.foodName.toLowerCase().includes(filterValue));
  }

  setFood(value: Food) {
    this.selectedFood = value;
  }

  setFoodEnter(value: string) {
    this.data
    this.filteredOptions.subscribe(data => {
      this.data = data.filter(data => data.foodName?.toLowerCase().includes(value))[0]
    })
    this.selectedFood = this.data
  }
}
