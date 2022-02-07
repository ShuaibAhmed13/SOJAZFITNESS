import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chart} from "chart.js";

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    var xaxis: any[] = [];
    var calories: any[] = [];
    this.httpClient.get("assets/linechartdata.json").subscribe(data => {

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
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };

      const myChart = new Chart("myChartBar",{
        type: 'bar',
        data: chartdata,
        options: {
          scales: {

          }
        },
      });

    })
  }
}
