import { Injectable } from '@angular/core';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  constructor() { }

  getUsers(): User[]{
    return this.users;
  }
}


