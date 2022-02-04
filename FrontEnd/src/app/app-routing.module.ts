import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FitnesssearchComponent} from "./components/fitnesssearch/fitnesssearch.component";

const routes: Routes = [
  {path: 'search', component:FitnesssearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
