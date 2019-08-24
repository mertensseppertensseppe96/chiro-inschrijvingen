import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './auth/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: firebase.User;
  constructor(private afAuth: AngularFireAuth, private loginService: LoginService, private router: Router) { }


  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      console.log(user)
      this.user = user;
    });
  }
}
