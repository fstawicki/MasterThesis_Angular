import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular_praca_magisterska';
  
  array: string[] = [];
  array2: string[] = [];

  renderElements(number: number){
    console.log(number)
  }

  copyArray(){

  }

  editElements(){

  }

  deleteElements(){

  }
}
