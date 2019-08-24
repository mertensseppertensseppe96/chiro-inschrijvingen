import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatMenuModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatInputModule, MatCheckboxModule, MatCardModule } from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LidComponent } from './lid/lid.component';
import { LidLijstComponent } from './lid-lijst/lid-lijst.component';
import { environment } from '../environments/environment';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NameComponent } from './components/name/name.component';
import { LoginComponent } from './auth/login/login.component';
// import { AngularFireAuthModule } from '@angular/fire/auth’;
@NgModule({
  declarations: [
    AppComponent,
    LidComponent,
    LidLijstComponent,
    AboutComponent,
    HeaderComponent,
    NameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AngularFireAuthModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
