import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FitnesssearchComponent } from './components/fitnesssearch/fitnesssearch.component';
import {FormsModule} from "@angular/forms";
import { LinechartComponent } from './components/linechart/linechart.component';
import {ChartsModule} from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { BarchartComponent } from './components/barchart/barchart.component';
import {signupComponent} from "./components/signup/signup.component";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import { AboutUsComponent } from './components/about-us/about-us.component';
import {FoodwidgetComponent} from "./components/foodwidget/foodwidget.component";
import {WorkoutmanualComponent} from "./components/workoutmanual/workoutmanual.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { ArmsComponent } from './components/WORKOUTS/arms/arms.component';
import { ShouldersComponent } from './components/WORKOUTS/shoulders/shoulders.component';
import { ChestComponent } from './components/WORKOUTS/chest/chest.component';
import { BackComponent } from './components/WORKOUTS/back/back.component';
import { LegsComponent } from './components/WORKOUTS/legs/legs.component';
import { CardioComponent } from './components/WORKOUTS/cardio/cardio.component';
import { CoreComponent } from './components/WORKOUTS/core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    FitnesssearchComponent,
    FitnesssearchComponent,
    AppComponent,
    LinechartComponent,
    BarchartComponent,
    WelcomePageComponent,
    signupComponent,
    AboutUsComponent,
    FoodwidgetComponent,
    WorkoutmanualComponent,
    NavbarComponent,
    ArmsComponent,
    ShouldersComponent,
    ChestComponent,
    BackComponent,
    LegsComponent,
    CardioComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
