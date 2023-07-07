import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponent1';

  name: string;
  cif: string;
  address: string;
  group: string;

  constructor (){

    this.name = "";
    this.cif = "";
    this.address = "";
    this.group = "";
  }

  newUser(newName: string, newCIF: string, newAddress: string, newGroup: string){

    this.name = newName;
    this.cif = newCIF;
    this.address = newAddress;
    this.group = newGroup;
  }
}
