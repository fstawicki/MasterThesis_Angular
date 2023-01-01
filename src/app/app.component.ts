import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular_praca_magisterska';
  
  array1: string[] = [];
  array2: string[] = [];
  copiedArray: string[] = [];

  renderElements(number: number){
    this.array1 = [];
    for(let i: number=0; i<number; i++){
      this.array1[i] = `Element nr: ${i+1}`;
    }
    console.log(this.array1);
  }

  copyArray(){
    this.copiedArray = this.array1;
    console.log(this.copiedArray);
  }

  editElements(){
  }

  deleteElements(){
    this.array1 = [];
  }
}
