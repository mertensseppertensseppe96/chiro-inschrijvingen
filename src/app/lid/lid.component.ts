import { Component, OnInit } from '@angular/core';

import { LidService } from '../shared/lid.service';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-lid',
  templateUrl: './lid.component.html',
  styleUrls: ['./lid.component.css']
})
export class LidComponent implements OnInit {

  constructor(public lidService:LidService, public _snackBar:MatSnackBar) { }
  submitted: boolean;
  showSuccesMessage: boolean;
  formControls = this.lidService.form.controls;
  
  firstName:string;
  lastName:string;
  ngOnInit() {
    this.firstName=localStorage.getItem("firstname");
    this.lastName=localStorage.getItem("lastname");
  }


  onSubmit(){
    this.submitted=true;
    if (this.lidService.form.valid){
      if (this.lidService.form.get('$key').value == null){
        this.lidService.insertLid(this.lidService.form.value);
        this._snackBar.open('Toegevoegd', 'Sluiten', {
          duration: 2000,
        });
      }
        else{
          this.lidService.updateLid(this.lidService.form.value);
        // this.showSuccesMessage = true;
        this._snackBar.open('Aangepast', 'Sluiten', {
          duration: 2000,
        });
      }
        // setTimeout(() => this.showSuccesMessage = false, 3000);
        this.lidService.form.reset();
        
      this.submitted = false;
      
      };
    }
}

