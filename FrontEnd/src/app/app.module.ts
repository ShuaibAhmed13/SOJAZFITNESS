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
import { WorkoutpostComponent } from './components/workoutpost/workoutpost.component';
import {NgbCollapseModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MyProgressComponent } from './components/my-progress/my-progress.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import{ ConnectionService} from "./connection.service";
import {AddfoodComponent} from "./components/addfood/addfood.component";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { CalculatorpageComponent } from './components/calculatorpage/calculatorpage.component';
import { FooterComponent } from './components/footer/footer.component';
import {UserService} from "./components/services/user.services";
import { NewnavbarComponent } from './components/newnavbar/newnavbar.component';
import {AuthGuard} from "./components/services/auth.guard";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminpanelpageComponent } from './components/adminpanelpage/adminpanelpage.component';
import { EditaddmodalComponent } from './components/editaddmodal/editaddmodal.component';
import { AdminlistComponent } from './components/adminlist/adminlist.component';
import { PanelTopComponent } from './components/panel-top/panel-top.component';
import { SearchfilterPipe } from './components/pipes/searchfilter.pipe';
import {SafePipe} from "./components/pipes/safe.pipe";
import {VideosearchComponent} from "./components/videosearch/videosearch.component";
import{WorkoutequipmentComponent} from "./components/workoutequipment/workoutequipment.component";
import {ContactService} from "./contact.service";

import {ToastrModule} from "ngx-toastr";
import { ChartComponent } from './components/chart/chart.component';
import {DatePipe} from "@angular/common";
import { FooddiaryComponent } from './components/fooddiary/fooddiary.component';

import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { ForgotpasswordformComponent } from './components/forgot_password_form/forgotpasswordform.component';
import { ThemeModeComponent } from './components/theme-mode/theme-mode.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { EditprofilemodelComponent } from './components/editprofilemodel/editprofilemodel.component';


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
    ProgressBarComponent,
    WorkoutpostComponent,
      MyProgressComponent,
      SettingsPageComponent,
    WorkoutpostComponent,
    FoodsearchComponent,
    AddfoodComponent,
    LandingPageComponent,
    BmiCalculatorComponent,
    HeaderComponent,
    CalculatorpageComponent,
    FooterComponent,
    NewnavbarComponent,
    UserProfileComponent,
    AdminpanelpageComponent,
    EditaddmodalComponent,
    AdminlistComponent,
    PanelTopComponent,
    SearchfilterPipe,
    VideosearchComponent,
    SafePipe,
    WorkoutequipmentComponent,
    FooddiaryComponent,
    ResetPasswordFormComponent,
    ForgotpasswordformComponent,
    ChartComponent,
    ThemeModeComponent,
    EditprofilemodelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressBarModule,
    NgbCollapseModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    MatExpansionModule,
    ToastrModule.forRoot({timeOut: 2000, positionClass: 'toast-bottom-left'}),
    MatSlideToggleModule

/*  HttpClientInMemoryApiModule.forRoot(
    InMemoryDataService, {dataEncapsulation: false,
    passThruUnknownUrl: true}
)*/
  ],
  providers: [UserService, AuthGuard, ConnectionService, ContactService, DatePipe, SearchfilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
