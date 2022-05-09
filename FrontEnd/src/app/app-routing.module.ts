import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {PageNotFoundPageComponent} from "./components/page-not-found-page/page-not-found-page.component";
import {FitnesssearchComponent} from "./components/fitnesssearch/fitnesssearch.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {signupComponent} from "./components/signup/signup.component";
import {WorkoutmanualComponent} from "./components/workoutmanual/workoutmanual.component";
import {LoginpageComponent} from "./components/loginpage/loginpage.component";
import {ProgressBarComponent} from "./components/progress-bar/progress-bar.component";
import {SettingsPageComponent} from "./components/settings-page/settings-page.component";
import {WorkoutpostComponent} from "./components/workoutpost/workoutpost.component";
import {MyProgressComponent} from "./components/my-progress/my-progress.component";
import {FoodsearchComponent} from "./components/foodsearch/foodsearch.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {BmiCalculatorComponent} from "./components/bmi-calculator/bmi-calculator.component";
import {CalculatorpageComponent} from "./components/calculatorpage/calculatorpage.component";
import {NewnavbarComponent} from "./components/newnavbar/newnavbar.component";
import {AuthGuard} from "./components/services/auth.guard";
import {LoggedinauthGuard} from "./components/services/loggedinauth.guard";
import {AdminpanelpageComponent} from "./components/adminpanelpage/adminpanelpage.component";
import {RoleGuard} from "./components/services/role.guard";
import {EditaddmodalComponent} from "./components/editaddmodal/editaddmodal.component";
import {AdminlistComponent} from "./components/adminlist/adminlist.component";
import {VideosearchComponent} from "./components/videosearch/videosearch.component";
import {WorkoutequipmentComponent} from "./components/workoutequipment/workoutequipment.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {FooddiaryComponent} from "./components/fooddiary/fooddiary.component";
import {ForgotpasswordformComponent} from "./components/forgot_password_form/forgotpasswordform.component";
import {ResetPasswordFormComponent} from "./components/reset-password-form/reset-password-form.component";

const routes: Routes = [
  {path: '', component:LandingPageComponent, canActivate: [LoggedinauthGuard]},
  { path: 'welcomepage', component: WelcomePageComponent, canActivate: [AuthGuard]},
  { path: 'aboutus', component: AboutUsComponent},
  {path: 'search', component:FitnesssearchComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: signupComponent},
  {path: 'workoutmanual', component: WorkoutmanualComponent, canActivate:[AuthGuard]},
  {path: 'loginpage', component:LoginpageComponent},
  {path: 'exercisepost', component:WorkoutpostComponent, canActivate: [AuthGuard]},
  {path: 'progressbar', component:ProgressBarComponent},
  {path: 'myprogress', component: MyProgressComponent, canActivate: [AuthGuard]},
  {path: 'settingspage', component: SettingsPageComponent, canActivate: [AuthGuard]},
  {path: 'searchfood', component:FoodsearchComponent, canActivate: [AuthGuard]},
  {path: 'calculatorpage', component: CalculatorpageComponent},
  {path: 'adminpanelpage', component: AdminpanelpageComponent, canActivate: [RoleGuard]},
  {path: 'modal', component: EditaddmodalComponent, canActivate: [AuthGuard]},
  {path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'adminlisttest', component: AdminlistComponent, canActivate: [AuthGuard]},
  {path: 'videosearch', component: VideosearchComponent, canActivate: [AuthGuard]},
  {path: 'workoutequipment', component: WorkoutequipmentComponent},
  {path: 'fooddiary', component: FooddiaryComponent, canActivate: [AuthGuard]},
  {path: 'resetpasswordform', component: ResetPasswordFormComponent},
  {path: 'forgotpasswordform', component: ForgotpasswordformComponent},
  { path: '**', component: PageNotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
