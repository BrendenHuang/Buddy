import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  searchBuddy: FormGroup;
  data: Observable<any>;

  users: any = [];
  constructor(private http: HttpClient, private usersService: UsersService) {
    this.searchBuddy = new FormGroup({
      age: new FormControl('')
    })
  }

  ngOnInit(){
    this.getUsers()
  }

  async getUsers(){
    var url = 'https://itj-buddy.herokuapp.com/';
    this.http.get(url).subscribe(data => {
    this.users=data
  })

  console.log('Message: ' + this.users)
}

}
