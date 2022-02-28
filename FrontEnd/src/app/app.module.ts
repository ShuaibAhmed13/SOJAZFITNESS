import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FitnesssearchComponent } from './components/fitnesssearch/fitnesssearch.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LinechartComponent } from './components/linechart/linechart.component';
import {ChartsModule} from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { BarchartComponent } from './components/barchart/barchart.component';
import {signupComponent} from "./components/signup/signup.component";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import { AboutUsComponent } from './components/about-us/about-us.component';
import {FoodwidgetComponent} from "./components/foodwidget/foodwidget.component";
import{LoginpageComponent} from "./components/loginpage/loginpage.component";
import { FoodsearchComponent } from './components/foodsearch/foodsearch.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { DisplayFoodNutritionComponent } from './components/display-food-nutrition/display-food-nutrition.component';
import {WorkoutmanualComponent} from "./components/workoutmanual/workoutmanual.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ShouldersComponent} from "./components/WORKOUTS/shoulders/shoulders.component";
import {ChestComponent} from "./components/WORKOUTS/chest/chest.component";
import {ArmsComponent} from "./components/WORKOUTS/arms/arms.component";
import {CardioComponent} from "./components/WORKOUTS/cardio/cardio.component";
import {BackComponent} from "./components/WORKOUTS/back/back.component";
import {CoreComponent} from "./components/WORKOUTS/core/core.component";
import {LegsComponent} from "./components/WORKOUTS/legs/legs.component";
import { WorkoutpostComponent } from './components/workoutpost/workoutpost.component';
import {NgbCollapseModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AddfoodComponent} from "./components/addfood/addfood.component";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { CalculatorpageComponent } from './components/calculatorpage/calculatorpage.component';
import { FooterComponent } from './components/footer/footer.component';
import {UserService} from "./components/services/user.services";
import { NewnavbarComponent } from './components/newnavbar/newnavbar.component';
import {AuthGuard} from "./components/services/auth.guard";


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
    LoginpageComponent,
    FoodsearchComponent,
    DisplayFoodNutritionComponent,
    WorkoutmanualComponent,
    NavbarComponent,
    ArmsComponent,
    BackComponent,
    CardioComponent,
    ChestComponent,
    CoreComponent,
    LegsComponent,
    ShouldersComponent,
    WorkoutpostComponent,
    FoodsearchComponent,
    AddfoodComponent,
    LandingPageComponent,
    BmiCalculatorComponent,
    HeaderComponent,
    CalculatorpageComponent,
    FooterComponent,
    NewnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    NgbCollapseModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule,

  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
