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

const routes: Routes = [
  { path: 'welcomepage', component: WelcomePageComponent},
  { path: 'aboutus', component: AboutUsComponent},
  {path: 'search', component:FitnesssearchComponent},
  {path: 'signup', component: signupComponent},
  {path: 'workoutmanual', component: WorkoutmanualComponent},
  {path: 'arms', component: ArmsComponent},
  {path: 'back', component: BackComponent},
  {path: 'cardio', component: CardioComponent},
  {path: 'chest', component: ChestComponent},
  {path: 'core', component: CoreComponent},
  {path: 'legs', component: LegsComponent},
  {path: 'shoulders', component: ShouldersComponent},
  {path: 'loginpage', component:LoginpageComponent},
  {path: 'exercisepost', component:WorkoutpostComponent},
  { path: '**', component: PageNotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
