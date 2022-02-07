import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fitnesssearch',
  templateUrl: './fitnesssearch.component.html',
  styleUrls: ['./fitnesssearch.component.scss']
})

export class FitnesssearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  info: any = [];

  ngOnInit(): void {
    this.http.get("assets/musclegroups.json").subscribe(data => {
      this.info = data;
    })
  }



}
