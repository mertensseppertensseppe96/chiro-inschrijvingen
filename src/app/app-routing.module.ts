import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LidComponent } from './lid/lid.component';
import { AboutComponent } from './components/about/about.component';
import { NameComponent } from './components/name/name.component';
const routes: Routes = [
  { path: '', component: NameComponent},
  { path: 'home' ,component: LidComponent},
  { path: 'about', component: AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
