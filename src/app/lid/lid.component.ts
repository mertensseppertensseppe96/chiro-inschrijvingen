import { Component, OnInit } from '@angular/core';

import { LidService } from '../shared/lid.service';
@Component({
  selector: 'app-lid',
  templateUrl: './lid.component.html',
  styleUrls: ['./lid.component.css']
})
export class LidComponent implements OnInit {

  constructor(private lidService:LidService) { }
  submitted: boolean;
  showSuccesMessage: boolean;
  formControls = this.lidService.form.controls;
  ngOnInit() {
  }


  onSubmit(){
    this.submitted=true;
    if (this.lidService.form.valid){
      if (this.lidService.form.get('$key').value == null)
        this.lidService.insertLid(this.lidService.form.value);
        else
          this.lidService.updateLid(this.lidService.form.value);
        this.showSuccesMessage = true;
        setTimeout(() => this.showSuccesMessage = false, 3000);
        this.lidService.form.reset();
        
      this.submitted = false;
      
      };
    }
    
  }

