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


}


