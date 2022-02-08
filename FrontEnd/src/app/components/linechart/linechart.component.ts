import { Component, OnInit } from '@angular/core';
import {Chart, scaleService} from 'chart.js';
import {HttpClient} from "@angular/common/http";
import {MonthlyData} from "./MonthlyData";
import {newArray} from "@angular/compiler/src/util";


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}


  ngOnInit(): void {
    var xaxis: any[] = [];
    var calories: any[] = [];
    this.httpClient.get("assets/linechartdata.json").subscribe(data=> {

      var objs = Object.values(data)[0]

      for (let entry of objs) {
        if(entry.day != null) {
          xaxis.push(entry.day)
        }else if(entry.month != null) {
          xaxis.push(entry.month)
        }
        calories.push(entry.calories)
      }
      const chartdata = {
        labels: xaxis,
        datasets: [{

          label: 'Calories Consumed',
          data: calories,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,

        }]
      };
      const myChart = new Chart("myChartLine", {
        type: 'line',
        data: chartdata,
      });

    })
  }


}
