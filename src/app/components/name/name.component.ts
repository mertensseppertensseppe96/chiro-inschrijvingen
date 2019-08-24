import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor(public router: Router) { }
  nameSet: boolean;
  ngOnInit() {
    if (localStorage.getItem("herinnering") != null) {
      localStorage.removeItem("herinnering");
    }

  }
  onSubmit(her) {
    localStorage.setItem("herinnering", her);
    this.router.navigate(['home']);
  }

}
