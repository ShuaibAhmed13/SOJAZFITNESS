import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../interfaces/Food";

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.scss']
})
export class AddfoodComponent implements OnInit {

  @Input() selectedFood: Food | undefined;
  servings:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  validateValue(value: string) {
    console.log(value)
  }

  cancelAdd() {
    this.selectedFood = undefined;
  }
}
