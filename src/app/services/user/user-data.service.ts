import { Injectable } from '@angular/core';
import { UserGeneral } from 'src/app/models/user/user-general.model';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  constructor() { }

  loggedInUser: UserGeneral;
  
}
