import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FitnesssearchComponent } from './components/fitnesssearch/fitnesssearch.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LinechartComponent } from './components/linechart/linechart.component';
import {ChartsModule} from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { BarchartComponent } from './components/barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    FitnesssearchComponent
    AppComponent,
    LinechartComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
