import { Component, OnInit } from '@angular/core';
import {DecimalPipe, formatNumber} from "@angular/common";

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BmiCalculatorComponent implements OnInit {

  system: "Metric" | "Imperial" = "Metric"
  results: number = 0;
  error: boolean = false;
  weightClass: "Severely Underweight" | "Moderately Underweight" | "Underweight" | "Healthy" | "Overweight" | "Obese" | "Obese Class 2" | "Obese Class 3" | undefined;
  healthyRange: string = "";
  needlePosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setError(){
    this.error = true;
    this.resetValues();
    console.log("inside of set error bottom")
    this.resetError();
  }
  resetError() {
    this.error = false;
  }

  resetValues() {
    this.results = 0;
    this.weightClass = undefined;
    this.healthyRange = "";
    this.needlePosition = 0;
    console.log("Values reset")
  }

  changeSystem() {
    if(this.system == "Metric") {
      this.system = "Imperial"
    } else {
      this.system = "Metric"
    }
    this.resetValues();
  }

  calculateResultsImperial(feet: number, inches: number, pounds: number) {
    if(this.error || feet < 1 || pounds < 1) {
      //this.resetValues();
      return;
    }
    if(inches < 1) {
      inches = 0;
    }
    let centimeters = feet * 30.48 + inches * 2.54;
    let kilograms = pounds * 0.453592
    this.calculateResultsMetric(centimeters, kilograms);
  }
  calculateResultsMetric(centimeters: number, kilograms: number) {
    if(centimeters < 1 || kilograms < 1) {
      this.resetValues();
      return;
    }

    let meters = centimeters/ 100;
    this.results = kilograms /(meters * meters);
    this.results = Math.round(this.results * 100) / 100;
    this.getRange();
    this.getHealthyRange(meters);
    this.calculateNeedlePosition(this.results);
  }
  getRange() {
    let weight = this.results;
    if(weight < 16) {
      this.weightClass ="Severely Underweight";
    }
    else if(weight < 17 && weight >= 16) {
      this.weightClass = "Moderately Underweight";
    }
      else if(weight < 18.5 && weight >= 17) {
      this.weightClass = "Underweight";
    } else if(weight >= 18.5 && weight <= 24.9) {
      this.weightClass = "Healthy";
    } else if(weight >= 25 && weight <= 29.9) {
      this.weightClass = "Overweight";
    } else if(weight >= 30 && weight < 35) {
      this.weightClass = "Obese";
    } else if(weight >= 35 && weight < 40) {
      this.weightClass = "Obese Class 2";
    } else if(weight >= 40){
      this.weightClass = "Obese Class 3";
    }
  }

  getHealthyRange(meters: number) {
    let low = meters * meters * 18.5;
    low = Math.round(low * 100) / 100;
    let high = meters * meters * 24.9;
    high = Math.round(high * 100) / 100;
    if(this.system == 'Metric') {
      this.healthyRange = Math.round(low * 2.205 * 100)/100 + ' - ' + Math.round(high * 2.205 * 100)/100;
    } else {
      this.healthyRange = low + ' - ' + high;
    }
  }

  calculateNeedlePosition(results: number) {
    let position = results - 13;
    position = (position / 30) * 100;
    this.needlePosition = position;
    if(position < 0) {
      this.needlePosition = 0;
    }
    if(position > 100) {
      this.needlePosition = 100;
    }

  }
}
