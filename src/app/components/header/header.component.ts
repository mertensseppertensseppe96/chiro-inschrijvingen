import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private loginService: LoginService, private afAuth: AngularFireAuth) { }
  firstName: string;
  lastName: string;

  //login
  user: firebase.User;
  //end
  ngOnInit() {
    //login
    this.afAuth.authState.subscribe(user => {
      this.user = user;
    });
    //end
  }
  logout() {
    this.loginService.logOut();
    this.router.navigate(['']);
  }
}
