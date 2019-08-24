import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LidComponent } from './lid/lid.component';
import { AboutComponent } from './components/about/about.component';
import { NameComponent } from './components/name/name.component';
import { LoginComponent } from './auth/login/login.component'
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: 'home', component: LidComponent, canActivate: [AuthGuard] },
  { path: 'reminder', component: NameComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
