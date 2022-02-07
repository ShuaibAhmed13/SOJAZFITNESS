import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import {ChartsModule} from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PageNotFoundPageComponent } from './components/page-not-found-page/page-not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    WelcomePageComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
