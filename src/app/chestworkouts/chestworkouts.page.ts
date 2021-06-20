import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chestworkouts',
  templateUrl: './chestworkouts.page.html',
  styleUrls: ['./chestworkouts.page.scss'],
})
export class ChestworkoutsPage{

  workouta: any = [];

  constructor(public http: HttpClient,) {
    
   }

  ngOnInit() {
    this.getChest();
  }

  async getChest(){
    var url = 'https://itj-buddy.herokuapp.com/getChest';
    this.http.get(url).subscribe(data => {
    this.workouta=data
  })
}

}
