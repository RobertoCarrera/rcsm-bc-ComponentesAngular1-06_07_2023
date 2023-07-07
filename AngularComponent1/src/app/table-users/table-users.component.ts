import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent {

  users: Array<string>;

  constructor(){

    this.users = [];
  }

  
}
