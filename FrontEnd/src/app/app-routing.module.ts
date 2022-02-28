import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {PageNotFoundPageComponent} from "./components/page-not-found-page/page-not-found-page.component";
import {FitnesssearchComponent} from "./components/fitnesssearch/fitnesssearch.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {signupComponent} from "./components/signup/signup.component";
import {WorkoutmanualComponent} from "./components/workoutmanual/workoutmanual.component";
import {ArmsComponent} from "./components/WORKOUTS/arms/arms.component";
import {BackComponent} from "./components/WORKOUTS/back/back.component";
import {CardioComponent} from "./components/WORKOUTS/cardio/cardio.component";
import {ChestComponent} from "./components/WORKOUTS/chest/chest.component";
import {CoreComponent} from "./components/WORKOUTS/core/core.component";
import {LegsComponent} from "./components/WORKOUTS/legs/legs.component";
import {ShouldersComponent} from "./components/WORKOUTS/shoulders/shoulders.component";
import {LoginpageComponent} from "./components/loginpage/loginpage.component";
import {WorkoutpostComponent} from "./components/workoutpost/workoutpost.component";
import {FoodsearchComponent} from "./components/foodsearch/foodsearch.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {BmiCalculatorComponent} from "./components/bmi-calculator/bmi-calculator.component";
import {CalculatorpageComponent} from "./components/calculatorpage/calculatorpage.component";
import {NewnavbarComponent} from "./components/newnavbar/newnavbar.component";
import {AuthGuard} from "./components/services/auth.guard";
import {LoggedinauthGuard} from "./components/services/loggedinauth.guard";

const routes: Routes = [
  {path: '', component:LandingPageComponent, canActivate: [LoggedinauthGuard]},
  { path: 'welcomepage', component: WelcomePageComponent, canActivate: [AuthGuard]},
  { path: 'aboutus', component: AboutUsComponent},
  {path: 'search', component:FitnesssearchComponent},
  {path: 'signup', component: signupComponent, canActivate: [LoggedinauthGuard]},
  {path: 'workoutmanual', component: WorkoutmanualComponent},
  {path: 'arms', component: ArmsComponent},
  {path: 'back', component: BackComponent},
  {path: 'cardio', component: CardioComponent},
  {path: 'chest', component: ChestComponent},
  {path: 'core', component: CoreComponent},
  {path: 'legs', component: LegsComponent},
  {path: 'shoulders', component: ShouldersComponent},
  {path: 'loginpage', component:LoginpageComponent, canActivate: [LoggedinauthGuard]},
  {path: 'exercisepost', component:WorkoutpostComponent},
  {path: 'searchfood', component:FoodsearchComponent},
  {path: 'calculatorpage', component: CalculatorpageComponent},
  {path:'newnavbar', component: NewnavbarComponent},
  { path: '**', component: PageNotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
