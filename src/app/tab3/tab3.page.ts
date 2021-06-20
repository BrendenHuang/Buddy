import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  }

  ngOnInit(){
    this.getUsers()
  }

  async getUsers(){
    var url = 'https://itj-buddy.herokuapp.com/tab3';
    this.http.get(url).subscribe(data => {
    this.users=data
  })
}

}
