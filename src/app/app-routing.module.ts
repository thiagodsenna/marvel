import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ResultsComponent } from './components/views/results/results.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "results/:search",
  component: ResultsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }