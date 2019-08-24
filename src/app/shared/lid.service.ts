import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { VirtualTimeScheduler } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LidService {

  constructor(private firebase: AngularFireDatabase) { }

  lidLijst: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    payed: new FormControl(false),
    functie: new FormControl('Lid')
  });

  getLeden() {
    this.lidLijst = this.firebase.list('leden');
    return this.lidLijst.snapshotChanges();
  }

  insertLid(lid) {
    this.lidLijst.push({
      fullName: lid.fullName,
      group: lid.group,
      email: lid.email,
      payed: lid.payed,
      functie: lid.functie
    });
  }
  populateForm(lid) {
    this.form.setValue(lid);
    // window.scroll(0,0);
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 30); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
  updateLid(lid) {
    this.lidLijst.update(lid.$key,
      {
        fullName: lid.fullName,
        group: lid.group,
        email: lid.email,
        payed: lid.payed,
        functie: lid.functie
      });
  }
  deleteLid($key: string) {
    this.lidLijst.remove($key);
  }
}
