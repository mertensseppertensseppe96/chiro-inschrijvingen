import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  firstName:string;
  lastName:string;
  ngOnInit() {
    this.firstName=sessionStorage.getItem("firstname");
    this.lastName=sessionStorage.getItem("lastname");
  }
 
}
