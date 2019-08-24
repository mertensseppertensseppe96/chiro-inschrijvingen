import { Component, OnInit } from '@angular/core';

import { LidService } from '../shared/lid.service';
import { MatSnackBar } from '@angular/material'


@Component({
  selector: 'app-lid',
  templateUrl: './lid.component.html',
  styleUrls: ['./lid.component.css']
})
export class LidComponent implements OnInit {

  constructor(public lidService: LidService, public _snackBar: MatSnackBar) { }
  submitted: boolean;
  showSuccesMessage: boolean;
  formControls = this.lidService.form.controls;
  herinnering: string;
  ngOnInit() {
    this.herinnering = localStorage.getItem('herinnering');
  }


  onSubmit() {
    this.submitted = true;
    if (this.lidService.form.valid) {
      if (this.lidService.form.get('$key').value == null) {
        this.lidService.insertLid(this.lidService.form.value);
        this._snackBar.open('Toegevoegd', 'Sluiten', {
          duration: 2000,
        });
      }
      else {
        this.lidService.updateLid(this.lidService.form.value);
        // this.showSuccesMessage = true;
        this._snackBar.open('Aangepast', 'Sluiten', {
          duration: 2000,
        });
      }
      // setTimeout(() => this.showSuccesMessage = false, 3000);
      this.lidService.form.setValue({
        $key: null,
        fullName: '',
        group: '',
        email: '',
        payed: false,
        functie: 'Lid'
      });

      this.submitted = false;

    };
  }
}

