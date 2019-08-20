import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor(public router: Router) { }
  nameSet:boolean;
  ngOnInit() {
    
  }
  onSubmit(firstName,lastName){
    // localStorage.removeItem("lastname");
    // localStorage.removeItem("firstname");
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("firstname", firstName);
    this.router.navigate(['home']);
  }
  
}
