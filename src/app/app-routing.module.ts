import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LidComponent } from './lid/lid.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [
  { path: '' ,component: LidComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
