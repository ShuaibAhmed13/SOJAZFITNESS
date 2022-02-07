import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {PageNotFoundPageComponent} from "./components/page-not-found-page/page-not-found-page.component";
import {FitnesssearchComponent} from "./components/fitnesssearch/fitnesssearch.component";

const routes: Routes = [
  { path: 'welcomepage', component: WelcomePageComponent},
  {path: 'search', component:FitnesssearchComponent},
  { path: '**', component: PageNotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
