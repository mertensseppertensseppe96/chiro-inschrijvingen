import { Component, OnInit } from '@angular/core';

import { LidService } from '../shared/lid.service';

@Component({
  selector: 'app-lid-lijst',
  templateUrl: './lid-lijst.component.html',
  styleUrls: ['./lid-lijst.component.css']
})
export class LidLijstComponent implements OnInit {

  constructor(private lidService:LidService) { }
  lidArray = [];
  showDeleteMessage:boolean;
  searchText:string = "";

  ngOnInit() {
    this.lidService.getLeden().subscribe(
      list => {
        this.lidArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()}
        });
      }
    );
  }
onDelete($key){
  
  if(confirm('Ben je zeker dat je deze persoon wilt verwijderen?')){
    this.lidService.deleteLid($key);
    this.showDeleteMessage=true;
    setTimeout(()=>this.showDeleteMessage=false,3000);
  }
}

filterCondition(lid) {
  return lid.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
}

}
