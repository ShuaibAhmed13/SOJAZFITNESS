import {Component, ElementRef, OnInit} from '@angular/core';
import {FooddiaryService} from "../services/fooddiary.service";
import {ChartDataSets, ChartType} from "chart.js";
import {Color} from "ng2-charts";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  type: ChartType = "line";
  currentUserId: number = -1;
  labels: string[] = [];
  calories: number[] = [];
  carbs: number[] = [];
  proteins: number[] = [];
  fats: number[] = [];
  chartLabel: string = ""
  chartLegend= true;
  colors: Color[] =  [
    // {backgroundColor: 'rgba(255,0,0,0.5)', },
    // {backgroundColor: 'rgba(0,255,0,0.5)'},

  ]
  chartOptions = {
    responsive: true,
  }
  chartData = [
    {data: this.calories, label: "Calories Consumed"},
    {data: this.carbs, label: "Carbs Consumed (g)"},
    {data: this.proteins, label: "Proteins Consumed (g)"},
    {data: this.fats, label: "Fats Consumed (g)"}
  ]

  constructor(public foodDiaryService: FooddiaryService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.setCurrentUserId();
    this.getPastWeek();
  }

  setCurrentUserId() {
    this.currentUserId = Number(localStorage.getItem("user_id"));
  }

  getPastWeek() {
    this.foodDiaryService.getPastWeekCalories(this.currentUserId).subscribe(data => {
      console.log(data)
      for(let i = 0; i < 7; i++) {
        this.calories.push(data[i].caloriesConsumed);
        this.carbs.push(data[i].carbsConsumed);
        this.proteins.push(data[i].proteinConsumed);
        this.fats.push(data[i].fatsConsumed);
        // @ts-ignore
        this.labels.push(this.datePipe.transform(String(data[i].date)));
      }
      this.calories.reverse();
      this.carbs.reverse();
      this.proteins.reverse();
      this.fats.reverse();
      this.labels.reverse();
      this.chartLabel = "Calories this Week"
    })
  }

  // createChart() {
  //   const myChart = new Chart(this.chartRef.nativeElement, {
  //     type: this.type,
  //     data: {
  //       labels: this.labels,
  //       datasets: [{
  //         label: this.chartLabel,
  //         data: this.data,
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //     }
  //   })
  // }
}
