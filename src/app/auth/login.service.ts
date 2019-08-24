import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: firebase.User;
  constructor(private afAuth:AngularFireAuth) { }

  login(){
    this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider);
  }
  logOut(){
    this.afAuth.auth.signOut();
  }
  isLoggedIn(){
    this.afAuth.authState.subscribe(user => {
      console.log(user)
      this.user = user;
    });
    if (this.user != null){
      return true;
    }
    else{
      return false;
    }
    
  }
}
